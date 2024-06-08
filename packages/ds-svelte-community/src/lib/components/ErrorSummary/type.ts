import type { Snippet } from "svelte";

export const sizes = ["medium", "small"] as const;
export const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

export interface Props {
	/**
	 * Changes padding and font-sizes.
	 */
	size?: (typeof sizes)[number];
	/**
	 * Heading text.
	 */
	heading: string;
	/**
	 * Allows setting a different HTML h-tag.
	 */
	headingTag?: (typeof headingTags)[number];

	/**
	 * Error content
	 */
	children: Snippet;
}
