<!--
@component
Simple primitive to add negative margin that lets content slide out of the parent's container.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/primitives/bleed).
-->

<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import { combineStyles, getResponsiveProps } from "$lib/components/utils/css";
	import type { BleedProps } from "./type";

	let {
		marginInline,
		marginBlock,
		reflectivePadding,
		as = "div",
		children,
		...restProps
	}: BleedProps = $props();
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class")}
	class={classes(restProps, "navds-bleed")}
	class:navds-bleed--padding={reflectivePadding}
	style={combineStyles(
		restProps,
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
	)}>{@render children()}</svelte:element
>
