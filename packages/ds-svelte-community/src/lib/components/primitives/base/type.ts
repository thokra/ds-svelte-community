import type { ResponsiveProp, SpacingScale } from "$lib/components/utils/types";
import type { Snippet } from "svelte";

export interface BasePrimitiveProps {
	/**
	 * Padding around children.
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/styling/design-tokens#0cc9fb32f213)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * padding='4'
	 * padding={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
	 */
	padding?: ResponsiveProp<SpacingScale>;
	/**
	 * Horizontal padding around children.
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/styling/design-tokens#0cc9fb32f213)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * paddingInline='4'
	 * paddingInline='4 5'
	 * paddingInline={{xs: '0 32', sm: '3', md: '4 5', lg: '5', xl: '6'}}
	 */
	paddingInline?: ResponsiveProp<SpacingScale | `${SpacingScale} ${SpacingScale}`>;
	/**
	 * Vertical padding around children.
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/styling/design-tokens#0cc9fb32f213)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * paddingBlock='4'
	 * paddingBlock='4 5'
	 * paddingBlock={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
	 */
	paddingBlock?: ResponsiveProp<SpacingScale | `${SpacingScale} ${SpacingScale}`>;
	/**
	 * Margin around element.
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/styling/design-tokens#0cc9fb32f213)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * margin='4'
	 * margin={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
	 */
	margin?: ResponsiveProp<SpacingScale>;
	/**
	 * Horizontal margin around element.
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/styling/design-tokens#0cc9fb32f213)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * marginInline='4'
	 * marginInline='4 5'
	 * marginInline={{xs: '0 32', sm: '3', md: '4 5', lg: '5', xl: '6'}}
	 */
	marginInline?: ResponsiveProp<
		| SpacingScale
		| `${SpacingScale} ${SpacingScale}`
		| "auto"
		| `auto ${SpacingScale}`
		| `${SpacingScale} auto`
	>;
	/**
	 * Vertical margin around element.
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/styling/design-tokens#0cc9fb32f213)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * marginBlock='4'
	 * marginBlock='4 5'
	 * marginBlock={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
	 */
	marginBlock?: ResponsiveProp<
		| SpacingScale
		| `${SpacingScale} ${SpacingScale}`
		| "auto"
		| `auto ${SpacingScale}`
		| `${SpacingScale} auto`
	>;
	/**
	 * CSS `width`
	 */
	width?: ResponsiveProp<string>;
	/**
	 * CSS `min-width`
	 */
	minWidth?: ResponsiveProp<string>;
	/**
	 * CSS `max-width`
	 */
	maxWidth?: ResponsiveProp<string>;
	/**
	 * CSS `height`
	 */
	height?: ResponsiveProp<string>;
	/**
	 * CSS `min-height`
	 */
	minHeight?: ResponsiveProp<string>;
	/**
	 * CSS `max-height`
	 */
	maxHeight?: ResponsiveProp<string>;
	/**
	 * CSS `position`
	 */
	position?: ResponsiveProp<"static" | "relative" | "absolute" | "fixed" | "sticky">;
	/**
	 * CSS `inset`.
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/styling/design-tokens#0cc9fb32f213)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * inset='4'
	 * inset='4 5'
	 * inset={{xs: '0 32', sm: '3', md: '4 5', lg: '5', xl: '6'}}
	 */
	inset?: ResponsiveProp<SpacingScale | `${SpacingScale} ${SpacingScale}`>;
	/**
	 * CSS `top`
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/styling/design-tokens#0cc9fb32f213)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * top='4'
	 * top={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
	 */
	top?: ResponsiveProp<SpacingScale>;
	/**
	 * CSS `right`
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/styling/design-tokens#0cc9fb32f213)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * right='4'
	 * right={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
	 */
	right?: ResponsiveProp<SpacingScale>;
	/**
	 * CSS `bottom`
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/styling/design-tokens#0cc9fb32f213)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * bottom='4'
	 * bottom={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
	 */
	bottom?: ResponsiveProp<SpacingScale>;
	/**
	 * CSS `left`
	 * Accepts a [spacing token](https://aksel.nav.no/grunnleggende/styling/design-tokens#0cc9fb32f213)
	 * or an object of spacing tokens for different breakpoints.
	 * @example
	 * left='4'
	 * left={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
	 */
	left?: ResponsiveProp<SpacingScale>;
	/**
	 * CSS `overflow`
	 */
	overflow?: ResponsiveProp<"visible" | "hidden" | "clip" | "scroll" | "auto">;
	/**
	 * CSS `overflow-x`
	 */
	overflowX?: ResponsiveProp<"visible" | "hidden" | "clip" | "scroll" | "auto">;
	/**
	 * CSS `overflow-y`
	 */
	overflowY?: ResponsiveProp<"visible" | "hidden" | "clip" | "scroll" | "auto">;
	/**
	 * CSS `flex-basis`
	 */
	flexBasis?: ResponsiveProp<string>;
	/**
	 * CSS `flex-shrink`
	 */
	flexShrink?: ResponsiveProp<string>;
	/**
	 * CSS `flex-grow`
	 */
	flexGrow?: ResponsiveProp<string>;

	as?: string;
	children?: Snippet;

	[key: string]: unknown;
}
