import { parse } from "svelte/compiler";
import type { Plugin as VitePlugin } from "vite";
import { walk } from "zimmerframe";

export default function storyProcess(): VitePlugin {
	return {
		name: "dssc-docs",

		transform: {
			order: "pre",
			handler(code, id) {
				if (!id.includes("routes/") || !id.endsWith(".svelte")) {
					return;
				}

				console.log("Processing", id);

				const ast = parse(code, {
					filename: id,
					modern: false,
				});

				if (!("html" in ast)) {
					return;
				}

				console.log("-------");
				console.log(ast);
				return;
				console.log(code);
				console.log("-------");

				walk(ast.html, null, {
					_(node, { next }) {
						if (
							node.type === "InlineComponent" &&
							node.name == "Story" &&
							node.children.length > 0
						) {
							console.log(node);
							//@ts-expect-error we know it's there
							const start = node.children[0].start;
							//@ts-expect-error we know it's there
							const end = node.children[node.children.length - 1].end;

							console.log("Found Story component", start, end);
						}
						next();
					},
				});
			},
		},
	};
}
