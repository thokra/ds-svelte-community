import type { HTMLAttributes } from "svelte/elements";

export const sizes = ["medium", "small"] as const;
export const variants = ["primary", "secondary", "simple"] as const;

export interface Props extends HTMLAttributes<HTMLDivElement> {
	label: string;
	hideLabel?: boolean;
	clearButtonLabel?: string;
	clearButton?: boolean;
	variant?: (typeof variants)[number];
	description?: string;
	size?: (typeof sizes)[number];
	value?: string;
	disabled?: boolean;
	loading?: boolean;
}
