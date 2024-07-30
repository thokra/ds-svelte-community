<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import { combineStyles, getResponsiveProps, getResponsiveValue } from "$lib/components/utils/css";
	import type { BasePrimitiveProps } from "./type";

	let {
		as = "div",
		padding,
		paddingInline,
		paddingBlock,
		margin,
		marginInline,
		marginBlock,
		width,
		minWidth,
		maxWidth,
		height,
		minHeight,
		maxHeight,
		position,
		inset,
		top,
		right,
		bottom,
		left,
		overflow,
		overflowX,
		overflowY,
		flexBasis,
		flexGrow,
		flexShrink,
		children,
		...restProps
	}: BasePrimitiveProps = $props();
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class", "style")}
	class={classes(restProps, {
		"navds-r-p": !!padding,
		"navds-r-pi": !!paddingInline,
		"navds-r-pb": !!paddingBlock,
		"navds-r-m": !!margin,
		"navds-r-mi": !!marginInline,
		"navds-r-mb": !!marginBlock,
		"navds-r-w": !!width,
		"navds-r-minw": !!minWidth,
		"navds-r-maxw": !!maxWidth,
		"navds-r-h": !!height,
		"navds-r-minh": !!minHeight,
		"navds-r-maxh": !!maxHeight,
		"navds-r-position": !!position,
		"navds-r-inset": !!inset,
		"navds-r-top": !!top,
		"navds-r-right": !!right,
		"navds-r-bottom": !!bottom,
		"navds-r-left": !!left,
		"navds-r-overflow": !!overflow,
		"navds-r-overflowx": !!overflowX,
		"navds-r-overflowy": !!overflowY,
		"navds-r-flex-basis": !!flexBasis,
		"navds-r-flex-grow": !!flexGrow,
		"navds-r-flex-shrink": !!flexShrink,
	})}
	style={combineStyles(
		restProps,
		/* Padding */
		getResponsiveProps("r", "p", "spacing", padding),
		getResponsiveProps("r", "pi", "spacing", paddingInline),
		getResponsiveProps("r", "pb", "spacing", paddingBlock),
		/* Margin */
		getResponsiveProps("r", "m", "spacing", margin),
		getResponsiveProps("r", "mi", "spacing", marginInline),
		getResponsiveProps("r", "mb", "spacing", marginBlock),
		/* Width & height */
		getResponsiveValue("r", "w", width),
		getResponsiveValue("r", "minw", minWidth),
		getResponsiveValue("r", "maxw", maxWidth),
		getResponsiveValue("r", "h", height),
		getResponsiveValue("r", "minh", minHeight),
		getResponsiveValue("r", "maxh", maxHeight),
		/* Positon & inset */
		getResponsiveValue("r", "position", position),
		getResponsiveProps("r", "inset", "spacing", inset),
		getResponsiveProps("r", "top", "spacing", top),
		getResponsiveProps("r", "right", "spacing", right),
		getResponsiveProps("r", "bottom", "spacing", bottom),
		getResponsiveProps("r", "left", "spacing", left),
		/* Overflow */
		getResponsiveValue("r", "overflow", overflow),
		getResponsiveValue("r", "overflowx", overflowX),
		getResponsiveValue("r", "overflowy", overflowY),
		/* Flex */
		getResponsiveValue("r", "flex-basis", flexBasis),
		getResponsiveValue("r", "flex-grow", flexGrow),
		getResponsiveValue("r", "flex-shrink", flexShrink),
	)}
	>{#if children}{@render children()}{/if}</svelte:element
>
