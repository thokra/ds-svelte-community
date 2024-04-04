import { svelte2tsx } from "svelte2tsx";

export function convert(filename: string, code: string) {
	const transformed = svelte2tsx(code, {
		filename: filename,
		isTsFile: true,
		mode: "dts",
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		noSvelteComponentTyped: true,
	});

	// console.log("----");
	// console.log(transformed.code);
	// console.log("----");
	return transformed.code;
}
