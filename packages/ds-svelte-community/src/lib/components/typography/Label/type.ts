import type { Snippet } from "svelte";

export type LabelProps = {
	/**
	 * medium: 18px, small: 16px
	 */
	size?: "medium" | "small";
	/**
	 * Adds margin-bottom
	 */
	spacing?: boolean;
	/**
	 * Tag to use for the label
	 */
	as?: "label" | "legend" | "span";

	/**
	 * Content
	 */
	children: Snippet;

	[key: string]: unknown;
};
