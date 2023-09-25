import type { HTMLAttributes } from "svelte/elements";

/**
 * Changes font-size, padding and gaps
 */
export const variants = ["circle", "rectangle", "rounded", "text"] as const;

export interface Props extends HTMLAttributes<HTMLDivElement> {
	variant: (typeof variants)[number];
	height?: string;
	width?: string;
}
