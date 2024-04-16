import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
	// Check for +page in dev, and _page.svelte.js when building for production
	const glob = new Bun.Glob("*/*/{+page.svelte,_page.svelte.js}");
	const list = glob.scan(import.meta.dirname);

	const paths: Record<string, string[]> = {};
	for await (const path of list) {
		const [key, file] = path.split("/");

		if (file.startsWith("[")) {
			continue;
		}

		if (!Object.keys(paths).includes(key)) {
			paths[key] = [];
		}

		paths[key].push(file);
	}

	for (const key in paths) {
		paths[key].sort();
	}

	return {
		paths,
	};
};

export const prerender = true;
export const trailingSlash = "always";
