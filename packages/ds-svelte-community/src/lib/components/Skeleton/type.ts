import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

/**
 * Changes font-size, padding and gaps
 */
export const variants = ["circle", "rectangle", "rounded", "text"] as const;

export interface Props extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Changes the shape of the skeleton.
	 */
	variant: (typeof variants)[number];

	/**
	 * When not inferring height from children, you must specify height.
	 */
	height?: string;

	/**
	 * When not inferring width from children, you must specify width.
	 */
	width?: string;

	/**
	 * Fit the skeleton to the size of the children.
	 */
	children?: Snippet;

	[key: string]: unknown;
}
