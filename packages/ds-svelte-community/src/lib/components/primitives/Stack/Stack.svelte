<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import { combineStyles, getResponsiveProps, getResponsiveValue } from "$lib/components/utils/css";
	import type { FullStackProps } from "./type";

	let {
		justify = undefined,
		align = undefined,
		wrap = true,
		gap = undefined,
		direction = "row",
		as = "div",
		children,
		...restProps
	}: FullStackProps = $props();
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class")}
	class={classes(restProps, "navds-stack", {
		"navds-vstack": direction === "column",
		"navds-hstack": direction === "row",
	})}
	style={combineStyles(
		restProps,
		getResponsiveProps(`stack`, "gap", "spacing", gap),
		getResponsiveValue(`stack`, "direction", direction),
		getResponsiveValue(`stack`, "align", align),
		getResponsiveValue(`stack`, "justify", justify),
	)}
	style:--__ac-stack-wrap={wrap ? "wrap" : "nowrap"}
>
	{@render children()}
</svelte:element>
