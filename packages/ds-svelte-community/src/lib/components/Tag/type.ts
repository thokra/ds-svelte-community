import type { Snippet } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

export const variants = [
	"warning",
	"warning-filled",
	"error",
	"error-filled",
	"info",
	"info-filled",
	"success",
	"success-filled",
	"neutral",
	"neutral-filled",
	"alt1",
	"alt1-filled",
	"alt2",
	"alt2-filled",
	"alt3",
	"alt3-filled",
] as const;

export const sizes = ["medium", "small", "xsmall"] as const;

export interface Props {
	/**
	 * Changes visual profile of tag.
	 */
	variant?: (typeof variants)[number];
	/**
	 * Changes font size.
	 */
	size?: (typeof sizes)[number];
	/**
	 * Tag to use for the element.
	 */
	as?: keyof SvelteHTMLElements;
	/**
	 * Tag content.
	 */
	children?: Snippet;
	/**
	 * Tag content. Will be used if `children` is not provided.
	 */
	text?: string;
}
