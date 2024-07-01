import type { ResponsiveProp, SpacingScale } from "$lib/components/utils/types";
import type { Snippet } from "svelte";

export type BleedSpacingInline = "0" | "full" | "px" | SpacingScale;
export type BleedSpacingBlock = "0" | "px" | SpacingScale;

export interface BleedProps {
	/** **Negative** horizontal margin around children.
	 *  Accepts a spacing token or an object of spacing tokens for different breakpoints.
	 * @example
	 * marginInline='4'
	 * marginInline='4 5'
	 * marginInline={{xs: '0 32', sm: '3', md: '4 5', lg: '5', xl: '6', "2xl": '12'}}
	 */
	marginInline?: ResponsiveProp<BleedSpacingInline | `${BleedSpacingInline} ${BleedSpacingInline}`>;
	/** **Negative** vertical margin around children.
	 *  Accepts a spacing token or an object of spacing tokens for different breakpoints.
	 * @example
	 * marginBlock='4'
	 * marginBlock='4 5'
	 * marginBlock={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6', "2xl": '12'}}
	 */
	marginBlock?: ResponsiveProp<BleedSpacingBlock | `${BleedSpacingBlock} ${BleedSpacingBlock}`>;
	/**
	 * When true, set the padding to mirror the margin.
	 * This maintains the apparent width of the element prior to adding Bleed.
	 */
	reflectivePadding?: boolean;
	/**
	 * HTML element to render as.
	 */
	as?: string;
	/**
	 * Content
	 */
	children: Snippet;
}
