import type { BreakpointsAlias } from "$lib/components/utils/types";
import type { HTMLAttributes } from "svelte/elements";

export interface ResponsiveProps extends BaseResponsiveProps {
	variant: "show" | "hide";
}

export interface BaseResponsiveProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * @example
	 * above='md'
	 */
	above?: Exclude<BreakpointsAlias, "xs">;
	/**
	 * @example
	 * below='md'
	 */
	below?: Exclude<BreakpointsAlias, "xs">;

	/**
	 * HTML element to render as.
	 */
	as?: "div" | "span";
}
