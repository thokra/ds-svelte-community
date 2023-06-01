import type { HTMLAttributes, HTMLButtonAttributes } from "svelte/elements";

export const sizes = ["medium", "small"] as const;
export const removableVariants = ["action", "neutral"] as const;

export interface Props extends HTMLAttributes<HTMLUListElement> {
	size?: (typeof sizes)[number];
}

export interface ToggleProps extends HTMLButtonAttributes {
	selected?: boolean;
	value: string;
}

export interface RemovableProps extends HTMLButtonAttributes {
	variant?: (typeof removableVariants)[number];
	removeLabel?: string;

	value: string;
}
