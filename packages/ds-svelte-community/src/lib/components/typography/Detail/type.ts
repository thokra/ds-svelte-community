import type { Snippet } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

export type DetailProps = {
	/**
	 * Adds margin-bottom
	 */
	spacing?: boolean;

	/**
	 * All caps
	 */
	uppercase?: boolean;

	/**
	 * Tag to use for the body
	 */
	as?: keyof SvelteHTMLElements;
	children: Snippet;
	[key: string]: unknown;
};
