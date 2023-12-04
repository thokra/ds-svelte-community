import fs from "fs";
import prettier from "prettier";
import { buildComponents } from "./components-list";

(async () => {
	const components = await buildComponents();

	let code = `// This file is auto-generated by hack/build-components-list.ts
	// Do not edit this file directly

	type KnownComponents = {
		components: Record<string, { path: string }>;
		icons: Record<string, { path: string }>;
	}

	export const Components : KnownComponents = ${JSON.stringify(components, null, 2)};
	`;

	// Read .prettierrc
	const prettierConfig = await prettier.resolveConfig("./.prettierrc");
	if (!prettierConfig) {
		throw new Error("Could not load .prettierrc");
	}
	prettierConfig.parser = "typescript";

	code = await prettier.format(code, prettierConfig);

	fs.writeFileSync("./src/components.ts", code, "utf-8");

	console.log(`Wrote components.ts`);
})();
