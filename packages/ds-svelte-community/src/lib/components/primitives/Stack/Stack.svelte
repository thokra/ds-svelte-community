<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import { combineStyles, getResponsiveProps, getResponsiveValue } from "$lib/components/utils/css";
	import BasePrimitive from "../base/BasePrimitive.svelte";
	import type { FullStackProps } from "./type";

	let {
		justify = undefined,
		align = "stretch",
		wrap = true,
		gap = undefined,
		direction = "row",
		as = "div",
		...restProps
	}: FullStackProps = $props();
</script>

<BasePrimitive
	this={as}
	{...omit(restProps, "class", "style")}
	class={classes(restProps, "navds-stack", {
		"navds-vstack": direction === "column",
		"navds-hstack": direction === "row",
		"navds-stack-gap": !!gap,
		"navds-stack-align": !!align,
		"navds-stack-direction": !!direction,
		"navds-stack-wrap": wrap,
	})}
	style={combineStyles(
		restProps,
		{ "--__ac-stack-wrap": wrap ? "wrap" : "nowrap" },
		getResponsiveProps("stack", "gap", "spacing", gap),
		getResponsiveValue("stack", "direction", direction),
		getResponsiveValue("stack", "align", align),
		getResponsiveValue("stack", "justify", justify),
	)}
/>
