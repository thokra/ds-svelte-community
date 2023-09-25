import type { HTMLSelectAttributes } from "svelte/elements";

/**
 * Changes font-size, padding and gaps
 */
export const sizes = ["medium", "small"] as const;

export interface Props extends Omit<HTMLSelectAttributes, "size"> {
	htmlSize?: number;
	label?: string;
	hideLabel?: boolean;
	style?: string;
	size?: (typeof sizes)[number];
	disabled?: boolean;
	error?: string;
	value?: string;
}
