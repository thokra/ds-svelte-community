<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import { combineStyles, getResponsiveProps } from "$lib/components/utils/css";
	import type { BleedProps } from "./type";

	type $$Props = BleedProps;

	/** **Negative** horizontal margin around children.
	 *  Accepts a spacing token or an object of spacing tokens for different breakpoints.
	 * @example
	 * marginInline='4'
	 * marginInline='4 5'
	 * marginInline={{xs: '0 32', sm: '3', md: '4 5', lg: '5', xl: '6', "2xl": '12'}}
	 */
	export let marginInline: BleedProps["marginInline"] = undefined;
	/** **Negative** vertical margin around children.
	 *  Accepts a spacing token or an object of spacing tokens for different breakpoints.
	 * @example
	 * marginBlock='4'
	 * marginBlock='4 5'
	 * marginBlock={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6', "2xl": '12'}}
	 */
	export let marginBlock: BleedProps["marginBlock"] = undefined;
	/**
	 * When true, set the padding to mirror the margin.
	 * This maintains the apparent width of the element prior to adding Bleed.
	 */
	export let reflectivePadding: BleedProps["reflectivePadding"] = undefined;

	/**
	 * HTML element to render as.
	 */
	export let as: BleedProps["as"] = "div";
</script>

<svelte:element
	this={as}
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-bleed")}
	class:navds-bleed--padding={reflectivePadding}
	style={combineStyles(
		$$restProps,
		getResponsiveProps("bleed", "margin-inline", "spacing", marginInline, true, [
			"0",
			"full",
			"px",
		]),
		getResponsiveProps("bleed", "margin-block", "spacing", marginBlock, true, ["0", "px"]),
		reflectivePadding
			? getResponsiveProps("bleed", "padding-inline", "spacing", marginInline, false, [
					"0",
					"full",
					"px",
				])
			: {},
		reflectivePadding
			? getResponsiveProps("bleed", "padding-block", "spacing", marginBlock, false, ["0", "px"])
			: {},
	)}><slot /></svelte:element
>
