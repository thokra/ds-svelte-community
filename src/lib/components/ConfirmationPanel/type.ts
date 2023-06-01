import type { HTMLAttributes } from "svelte/elements";

export const sizes = ["medium", "small"] as const;

export interface Props extends HTMLAttributes<HTMLDivElement> {
	error?: string;
	errorId?: string;
	size?: (typeof sizes)[number];
	value?: string;
	id?: string;
	checked?: boolean;
}
