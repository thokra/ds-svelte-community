import type { Snippet } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

export type BodyShortProps = {
	/**
	 * medium: 18px, small: 16px
	 */
	size?: "medium" | "small";
	/**
	 * Adds margin-bottom
	 */
	spacing?: boolean;
	/**
	 * Tag to use for the body
	 */
	as?: keyof SvelteHTMLElements;
	children: Snippet;
	[key: string]: unknown;
};
