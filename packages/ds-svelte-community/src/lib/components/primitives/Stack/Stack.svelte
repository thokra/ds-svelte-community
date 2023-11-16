<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import { combineStyles, getResponsiveProps, getResponsiveValue } from "$lib/components/utils/css";
	import type { StackProps } from "./type";

	type $$Props = StackProps;

	/**
	 * Justify-content
	 */
	export let justify: StackProps["justify"] = undefined;
	/**
	 * Align-items
	 */
	export let align: StackProps["align"] = undefined;
	/**
	 * flex-wrap
	 */
	export let wrap: StackProps["wrap"] = true;
	/**
	 * @example
	 * gap='4'
	 * gap={{xs: '2', sm: '3', md: '4', lg: '5', xl: '6'}}
	 */
	export let gap: StackProps["gap"] = undefined;
	/**
	 * flex-direction
	 */
	export let direction: StackProps["direction"] = "row";

	/**
	 * HTML element to render as.
	 */
	export let as: StackProps["as"] = "div";
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
