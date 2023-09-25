import type { PreprocessorGroup } from "svelte/types/compiler/preprocess";
import { Components } from "./components.js";
import { walkAndReplace } from "./walk-and-replace.js";

const packageComponent = "@nais/ds-svelte-community";
const packageIcons = "@nais/ds-svelte-community/icons";
const packageSourceDir = "@nais/ds-svelte-community/";

type replacePackage = {
	match: string;
	prefix: string;
};

export function optimizeImports({
	iconImportPrefix = {
		match: packageIcons,
		prefix: packageSourceDir,
	},
	componentsImportPrefix = {
		match: packageComponent,
		prefix: packageSourceDir,
	},
}: {
	iconImportPrefix?: replacePackage;
	componentsImportPrefix?: replacePackage;
} = {}): Pick<PreprocessorGroup, "script"> {
	return {
		script({ filename, content }) {
			if (filename && !/node_modules/.test(filename)) {
				const code = walkAndReplace(
					{
						content,
						filename,
					},
					({ node }, replaceContent) => {
						if (node.type === "ImportDeclaration") {
							switch (node.source.value) {
								case iconImportPrefix.match:
									replaceContent(
										node,
										node.specifiers
											.map(({ local, imported }) => {
												if (imported.name in Components.icons) {
													return `import ${local.name} from "${
														iconImportPrefix.prefix + Components.icons[imported.name].path
													}";`;
												}

												console.warn(
													`[ds-svelte:optimizeImport] ${imported.name} is not a valid ds-svelte icon`,
												);
												return "";
											})
											.join("\n"),
									);
									break;
								case componentsImportPrefix.match:
									replaceContent(
										node,
										node.specifiers
											.map(({ local, imported }) => {
												if (imported.name in Components.components) {
													return `import ${local.name} from "${
														componentsImportPrefix.prefix +
														Components.components[imported.name].path
													}";`;
												}

												console.warn(
													`[ds-svelte:optimizeImport] ${imported.name} is not a valid ds-svelte component`,
												);
												return "";
											})
											.join("\n"),
									);
									break;
							}
						}
					},
				);

				return { code: code };
			}

			return { code: content };
		},
	};
}
