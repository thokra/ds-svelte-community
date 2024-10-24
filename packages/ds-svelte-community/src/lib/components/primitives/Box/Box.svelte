<!--
  @component

	Box is a layout component that is often used as a building block for other components. It sets padding, border, etc. with design tokens.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/primitives/box).
-->

<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import { combineStyles, getResponsiveProps } from "$lib/components/utils/css";
	import BasePrimitive from "../base/BasePrimitive.svelte";
	import type { BoxProps } from "./type";

	let {
		background,
		borderColor,
		borderRadius,
		borderWidth,
		shadow,
		as = "div",
		children,
		...restProps
	}: BoxProps = $props();
</script>

<BasePrimitive
	{as}
	{...omit(restProps, "class")}
	class={classes(restProps, "navds-box", {
		"navds-box-bg": !!background,
		"navds-box-border-color": !!borderColor,
		"navds-box-border-width": !!borderWidth,
		"navds-box-border-radius": !!borderRadius,
		"navds-box-shadow": !!shadow,
	})}
	style={combineStyles(
		restProps,
		getResponsiveProps("box", "border-radius", "border-radius", borderRadius, false, ["0"]),
		{
			"--__ac-box-background": background ? `var(--a-${background})` : null,
			"--__ac-box-border-color": borderColor ? `var(--a-${borderColor})` : null,
			"--__ac-box-border-width": borderWidth
				? borderWidth
						.split(" ")
						.map((x) => `${x}px`)
						.join(" ")
				: null,
			"--__ac-box-shadow": shadow ? `var(--a-shadow-${shadow})` : null,
		},
	)}
	>{#if children}{@render children()}{/if}</BasePrimitive
>
