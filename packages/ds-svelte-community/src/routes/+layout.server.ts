import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
	const glob = new Bun.Glob("*/*/+page.svelte");
	const list = glob.scan(import.meta.dirname);

	const paths: Map<string, string[]> = new Map();
	for await (const path of list) {
		const [key, file] = path.split("/");

		if (!paths.has(key)) {
			paths.set(key, []);
		}

		paths.get(key)!.push(file);
	}

	return {
		paths,
	};
};
