import type {
	BackgroundToken,
	BorderColorToken,
	BorderRadiiToken,
	ResponsiveProp,
	ShadowToken,
	SpaceDelimitedAttribute,
	SpacingScale,
} from "$lib/components/utils/types";
import type { HTMLAttributes, SvelteHTMLElements } from "svelte/elements";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
	/** Background color. Accepts a color token. */
	background?: BackgroundToken;
	/** Border color. Accepts a color token. */
	borderColor?: BorderColorToken;
	/** Border radius. Accepts a radius token, or an object of radius tokens for different breakpoints.
	 * @example
	 * borderRadius='full'
	 * borderRadius='0 full large small'
	 * borderRadius={{xs: 'small large', sm: '0', md: 'large', lg: 'full'}}
	 */
	borderRadius?: ResponsiveProp<SpaceDelimitedAttribute<BorderRadiiToken>>;
	/**
	 * Border-width. If this is not set there will be no border.
	 * @example
	 * borderWidth='2'
	 * borderWidth='1 2 3 4'
	 */
	borderWidth?: SpaceDelimitedAttribute<"0" | "1" | "2" | "3" | "4" | "5">;
	/** Spacing around children. Accepts a spacing token or an object of spacing tokens for different breakpoints.
	 * @example
	 * padding='4'
	 * padding={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
	 */
	padding?: ResponsiveProp<SpacingScale>;
	/** Horizontal padding around children. Accepts a spacing token or an object of spacing tokens for different breakpoints.
	 * @example
	 * paddingInline='4'
	 * paddingInline='4 5'
	 * paddingInline={{xs: '0 32', sm: '3', md: '4 5', lg: '5', xl: '6'}}
	 */
	paddingInline?: ResponsiveProp<SpacingScale | `${SpacingScale} ${SpacingScale}`>;
	/** Vertical padding around children. Accepts a spacing token or an object of spacing tokens for different breakpoints.
	 * @example
	 * paddingBlock='4'
	 * paddingBlock='4 5'
	 * paddingBlock={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
	 */
	paddingBlock?: ResponsiveProp<SpacingScale | `${SpacingScale} ${SpacingScale}`>;
	/** Shadow on box. Accepts a shadow token.
	 * @example
	 * shadow='small'
	 */
	shadow?: ShadowToken;

	/**
	 * HTML element to render as.
	 */
	as?: keyof SvelteHTMLElements;
}
