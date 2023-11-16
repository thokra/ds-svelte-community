import type { ResponsiveProp, SpacingScale } from "$lib/components/utils/types";
import type { HTMLAttributes, SvelteHTMLElements } from "svelte/elements";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Justify-content
	 */
	justify?: ResponsiveProp<
		"start" | "center" | "end" | "space-around" | "space-between" | "space-evenly"
	>;
	/**
	 * Align-items
	 */
	align?: ResponsiveProp<"start" | "center" | "end" | "baseline" | "stretch">;
	/**
	 * flex-wrap
	 */
	wrap?: boolean;
	/**
	 * @example
	 * gap='4'
	 * gap={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
	 */
	gap?: ResponsiveProp<SpacingScale>;
	/**
	 * flex-direction
	 */
	direction?: ResponsiveProp<"row" | "column">;

	/**
	 * HTML element to render as.
	 */
	as?: keyof SvelteHTMLElements;
}
