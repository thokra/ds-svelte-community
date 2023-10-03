import type { HTMLButtonAttributes } from "svelte/elements";

export const sizes = ["xsmall", "small", "medium"] as const;
export const variants = ["action", "neutral"] as const;

export interface Props extends HTMLButtonAttributes {
	size?: (typeof sizes)[number];
	variant?: (typeof variants)[number];
	copyText: string;
	text?: string;
	activeText?: string;
	activeDuration?: number;
	title?: string;
	activeTitle?: string;
}
