import type { ResponsiveProp, SpacingScale } from "$lib/components/utils/types";
import type { Snippet } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

export interface HGridProps {
	/**
	 * Number of columns to display. Can be a number, a string with a unit or tokens for spesific breakpoints.
	 * Sets `grid-template-columns`, so `fr`, `minmax` etc. works.
	 * @example
	 * columns={{ sm: 1, md: 1, lg: "1fr auto", xl: "1fr auto"}}
	 * @example
	 * columns={3}
	 * @example
	 * columns="repeat(3, minmax(0, 1fr))"
	 */
	columns?: ResponsiveProp<number | string>;
	/** Spacing between columns. Based on spacing-tokens.
	 * @example
	 * gap="6"
	 * gap={{ sm: "2", md: "2", lg: "6", xl: "6"}}
	 */
	gap?: ResponsiveProp<SpacingScale>;
	/**
	 * Vertical alignment of children. Elements will by default stretch to the height of parent-element.
	 */
	align?: "start" | "center" | "end";

	/**
	 * HTML element to render as.
	 */
	as?: keyof SvelteHTMLElements;

	children: Snippet;

	[key: string]: unknown;
}
