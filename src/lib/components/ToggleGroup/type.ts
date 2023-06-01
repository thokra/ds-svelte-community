import { getContext } from "svelte";
import type { HTMLAttributes, HTMLButtonAttributes } from "svelte/elements";
import type { Readable } from "svelte/store";

export type ToggleGroupContext = {
	value: Readable<string>;
	size: "medium" | "small";
};

export const contextKey = Symbol("ToggleGroupContext");

export function getToggleGroupContext() {
	const ctx = getContext<ToggleGroupContext>(contextKey);
	if (!ctx) {
		throw new Error("ToggleGroupContext not found");
	}
	return ctx;
}

export const sizes = ["medium", "small"] as const;
export const variants = ["action", "neutral"] as const;

export interface ToggleGroupProps extends HTMLAttributes<HTMLDivElement> {
	value: string;
	size?: (typeof sizes)[number];
	label?: string;
	variant?: (typeof variants)[number];
}

export interface ToggleGroupItemProps extends HTMLButtonAttributes {
	value: string;
}
