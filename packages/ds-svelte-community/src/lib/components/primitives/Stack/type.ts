import type { ResponsiveProp, SpacingScale } from "$lib/components/utils/types";
import type { Snippet } from "svelte";
import type { BasePrimitiveProps } from "../base/type";

export interface FullStackProps extends StackProps {
	/**
	 * flex-direction
	 */
	direction?: ResponsiveProp<"row" | "column">;
}

export interface StackProps extends Omit<BasePrimitiveProps, "direction"> {
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

	children: Snippet;

	[key: string]: unknown;
}
