import { walk } from "estree-walker";
import fs from "fs";
import path from "path";
import { parse } from "svelte/compiler";
import { totalist } from "totalist";

type ExportName = string;

interface BuildComponentsApi {
	path: string;
}
export interface BuildComponents {
	components: Record<ExportName, BuildComponentsApi>;
	icons: Record<ExportName, BuildComponentsApi>;
}

function parseNested(filepath: string): Set<string> {
	const indexJs = fs
		.readFileSync(path.join(filepath, "index.ts"), "utf-8")
		.replace(/^export type .*$/gm, "");
	const ast = parse(`<script>${indexJs}</script>`);
	const exports = new Set<string>();

	walk(ast as never, {
		enter(n: unknown) {
			const node = n as { type?: string; name?: string; source?: { value?: string } };

			if (node.type === "Identifier" && node.name) {
				exports.add(node.name);
			} else if (node.type === "ExportAllDeclaration" && node.source?.value) {
				parseNested(path.join(filepath, node.source.value)).forEach((exportName) => {
					exports.add(exportName);
				});
			}
		},
	});

	return exports;
}

async function componentsFor(
	start: string,
	pathPrefix: string,
): Promise<Record<ExportName, BuildComponentsApi>> {
	const exports = new Set();

	parseNested(start).forEach((exportName) => {
		exports.add(exportName);
	});

	const moduleNames = new Map<ExportName, BuildComponentsApi>();

	await totalist(start, (file) => {
		const moduleName = path.parse(file).name;

		if (exports.has(moduleName)) {
			const path = file;
			moduleNames.set(moduleName, { path: pathPrefix + path });
		}
	});

	const ret: Record<ExportName, BuildComponentsApi> = {};
	[...moduleNames.entries()].sort().forEach(([moduleName, value]) => {
		ret[moduleName] = value;
	});

	return ret;
}

export async function buildComponents(): Promise<BuildComponents> {
	return {
		components: await componentsFor("../ds-svelte-community/src/lib", ""),
		icons: await componentsFor("../ds-svelte-community/src/lib/icons", "icons/"),
	};
}
