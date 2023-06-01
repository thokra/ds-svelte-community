import type { HTMLAttributes } from "svelte/elements";

export const variants = ["error", "warning", "info", "success"] as const;
export const sizes = ["medium", "small"] as const;

export interface Props extends HTMLAttributes<HTMLDivElement> {
	variant?: (typeof variants)[number];
	size?: (typeof sizes)[number];
	fullWidth?: boolean;
	inline?: boolean;
}
