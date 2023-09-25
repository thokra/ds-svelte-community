import type { HTMLInputAttributes } from "svelte/elements";

export const types = ["number", "email", "password", "tel", "text", "url"] as const;
export const sizes = ["medium", "small"] as const;

export interface Props extends Omit<HTMLInputAttributes, "size" | "type"> {
	value?: string | number;
	htmlSize?: number;
	hideLabel?: boolean;
	error?: string;
	errorId?: string;
	size?: (typeof sizes)[number];
	disabled?: boolean;
	id?: string;
	type?: (typeof types)[number];
}
