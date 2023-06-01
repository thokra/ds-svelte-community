import type { HTMLAttributes } from "svelte/elements";

export const sizes = ["medium", "small", "xsmall"] as const;

export interface Props extends HTMLAttributes<HTMLDivElement> {
	size?: (typeof sizes)[number];
	page?: number;
	siblingCount?: number;
	boundaryCount?: number;
	count: number;
	nextText?: string;
	prevText?: string;
	prevNextTexts?: boolean;
}
