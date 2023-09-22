import type { Node } from "estree";
import * as fs from "fs";
import * as path from "path";
import { parse, walk } from "svelte/compiler";
import { optimize } from "svgo";

const source = "node_modules/@navikt/aksel-icons/dist/svg";
const target = "src/lib/icons";

const files = fs.readdirSync(source);
const icons: string[] = [];
files.forEach((file) => {
	if (path.extname(file) !== ".svg") {
		return;
	}

	const name = toModuleName(path.basename(file, ".svg"));
	icons.push(name);
	const content = fs.readFileSync(path.join(source, file), "utf8");

	const res = optimize(content, {
		path: source,
		multipass: true,
		plugins: [
			{ name: "preset-default" },
			{ name: "removeDimensions" },
			{
				name: "addAttributesToSVGElement",
				params: { attributes: [{ focusable: "false", role: "img", width: "1em", height: "1em" }] },
			},
			{
				name: "convertColors",
				params: {
					currentColor: "#23262A",
				},
			},
			{
				name: "sortAttrs",
			},
		],
	});

	// console.log(res);

	fs.writeFileSync(path.join(target, `${name}.svelte`), templateSvelte(res.data, file));
	// console.log(templateSvelte(res.data, file));
});

const index =
	icons
		.sort()
		.map((name) => `export { default as ${name} } from "./${name}.svelte";`)
		.join("\n") + "\n";

fs.writeFileSync(path.join(target, "index.ts"), index);

function toModuleName(name: string) {
	return (
		name
			.replace(/-+/g, " ")
			.replace(/\.svg/g, "")
			.split(" ")
			.map((_, i) => {
				let first_char = _.slice(0, 1);

				if (i === 0 && first_char.match(/[0-9]|!/)) {
					first_char = "_" + first_char;
				}

				return first_char.toUpperCase() + _.slice(1);
			})
			.join("") + "Icon"
	);
}

interface Position {
	start: number;
	end: number;
}

interface NodeElement extends Position {
	type: "Element";
	name: string;
	children: Position[];
	attributes: {
		name: string;
		value: { raw: string }[];
	}[];
}

function templateSvelte(source: string, filename: string) {
	const ast = parse(source, { filename });

	let svg_attributes = "";
	let svg_children = "";

	walk(ast.html as never, {
		enter(n: Node) {
			const node = n as unknown as NodeElement;
			if (node.type != "Element" || node.name != "svg") {
				return;
			}

			node.children.forEach((child) => {
				svg_children += source.slice(child.start, child.end);
			});

			node.attributes.forEach(({ name, value }) => {
				if (name === "class") {
					value[0].raw.split(" ").forEach((name: string) => {
						svg_attributes += ` class:${name}={true}`;
					});
				} else {
					svg_attributes += ` ${name}="${value[0].raw}"`;
				}
			});

			// if (node.type === "Element" && node.name === "svg") {
			//   node.children.forEach((child) => {
			//     svg_children += source.slice(child.start, child.end);
			//   });

			//   node.attributes.forEach(({ name, value }) => {
			//     if (name === "class") {
			//       value[0].raw.split(" ").forEach((name: string) => {
			//         svg_attributes += ` class:${name}={true}`;
			//       });
			//     } else {
			//       svg_attributes += ` ${name}="${value[0].raw}"`;
			//     }
			//   });
			// }
		},
	});

	return `<script lang="ts" context="module">
	import newUniqueId from "locally-unique-id-generator";
	import type { SVGAttributes } from "svelte/elements";
</script>

<script lang="ts">
  /**
   * Title of the icon, used for accessibility
   */
  export let title = "";

	type $$Props = SVGAttributes<SVGElement> & {
		title?: string;
	}

  const id = newUniqueId();
</script>

<svg${svg_attributes} aria-labelledby={title ? id : undefined} {...$$restProps}>
  {#if title}
    <title {id}>{title}</title>
  {/if}
  <slot />
  ${svg_children.trim()}
</svg>`;
}
