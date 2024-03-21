<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import { combineStyles, getResponsiveProps, getResponsiveValue } from "$lib/components/utils/css";
	import type { FullStackProps } from "./type";

	type $$Props = FullStackProps;

	/**
	 * Justify-content
	 */
	export let justify: FullStackProps["justify"] = undefined;
	/**
	 * Align-items
	 */
	export let align: FullStackProps["align"] = undefined;
	/**
	 * flex-wrap
	 */
	export let wrap: FullStackProps["wrap"] = true;
	/**
	 * @example
	 * gap='4'
	 * gap={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
	 */
	export let gap: FullStackProps["gap"] = undefined;
	/**
	 * flex-direction
	 */
	export let direction: FullStackProps["direction"] = "row";

	/**
	 * HTML element to render as.
	 */
	export let as: FullStackProps["as"] = "div";
</script>

<svelte:element
	this={as}
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-stack", {
		"navds-vstack": direction === "column",
		"navds-hstack": direction === "row",
	})}
	style={combineStyles(
		$$restProps,
		getResponsiveProps(`stack`, "gap", "spacing", gap),
		getResponsiveValue(`stack`, "direction", direction),
		getResponsiveValue(`stack`, "align", align),
		getResponsiveValue(`stack`, "justify", justify),
	)}
	style:--__ac-stack-wrap={wrap ? "wrap" : "nowrap"}><slot /></svelte:element
>
