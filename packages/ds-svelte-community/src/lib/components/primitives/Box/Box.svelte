<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import { combineStyles, getResponsiveProps } from "$lib/components/utils/css";
	import type { BoxProps } from "./type";

	type $$Props = BoxProps;

	/** Background color. Accepts a color token. */
	export let background: BoxProps["background"] = undefined;

	/** Border color. Accepts a color token. */
	export let borderColor: BoxProps["borderColor"] = undefined;

	/** Border radius. Accepts a radius token, or an object of radius tokens for different breakpoints.
	 * @example
	 * borderRadius='full'
	 * borderRadius='0 full large small'
	 * borderRadius={{xs: 'small large', sm: '0', md: 'large', lg: 'full'}}
	 */
	export let borderRadius: BoxProps["borderRadius"] = undefined;

	/**
	 * Border-width. If this is not set there will be no border.
	 * @example
	 * borderWidth='2'
	 * borderWidth='1 2 3 4'
	 */
	export let borderWidth: BoxProps["borderWidth"] = undefined;

	/** Spacing around children. Accepts a spacing token or an object of spacing tokens for different breakpoints.
	 * @example
	 * padding='4'
	 * padding={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
	 */
	export let padding: BoxProps["padding"] = undefined;

	/** Horizontal padding around children. Accepts a spacing token or an object of spacing tokens for different breakpoints.
	 * @example
	 * paddingInline='4'
	 * paddingInline='4 5'
	 * paddingInline={{xs: '0 32', sm: '3', md: '4 5', lg: '5', xl: '6'}}
	 */
	export let paddingInline: BoxProps["paddingInline"] = undefined;

	/** Vertical padding around children. Accepts a spacing token or an object of spacing tokens for different breakpoints.
	 * @example
	 * paddingBlock='4'
	 * paddingBlock='4 5'
	 * paddingBlock={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
	 */
	export let paddingBlock: BoxProps["paddingBlock"] = undefined;

	/** Shadow on box. Accepts a shadow token.
	 * @example
	 * shadow='small'
	 */
	export let shadow: BoxProps["shadow"] = undefined;

	/**
	 * HTML element to render as.
	 */
	export let as: BoxProps["as"] = "div";
</script>

<!--
  @component

	Box is a layout component that is often used as a building block for other components. It sets padding, border, etc. with design tokens.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/primitives/box).
-->

<svelte:element
	this={as}
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-box")}
	style={combineStyles(
		$$restProps,
		getResponsiveProps("box", "border-radius", "border-radius", borderRadius, false, ["0"]),
		getResponsiveProps("box", "padding", "spacing", padding),
		getResponsiveProps("box", "padding-inline", "spacing", paddingInline),
		getResponsiveProps("box", "padding-block", "spacing", paddingBlock),
	)}
	style:--__ac-box-background={background ? `var(--a-${background})` : null}
	style:--__ac-box-border-color={borderColor ? `var(--a-${borderColor})` : null}
	style:--__ac-box-border-width={borderWidth
		? borderWidth
				.split(" ")
				.map((x) => `${x}px`)
				.join(" ")
		: null}
	style:--__ac-box-shadow={shadow ? `var(--a-shadow-${shadow})` : null}><slot /></svelte:element
>
