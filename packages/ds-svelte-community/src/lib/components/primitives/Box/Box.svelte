<!--
  @component

	Box is a layout component that is often used as a building block for other components. It sets padding, border, etc. with design tokens.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/primitives/box).
-->

<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import { combineStyles, getResponsiveProps } from "$lib/components/utils/css";
	import type { BoxProps } from "./type";

	let {
		background,
		borderColor,
		borderRadius,
		borderWidth,
		padding,
		paddingInline,
		paddingBlock,
		shadow,
		as = "div",
		children,
		...restProps
	}: BoxProps = $props();
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class")}
	class={classes(restProps, "navds-box")}
	style={combineStyles(
		restProps,
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
	style:--__ac-box-shadow={shadow ? `var(--a-shadow-${shadow})` : null}
	>{#if children}{@render children()}{/if}</svelte:element
>
