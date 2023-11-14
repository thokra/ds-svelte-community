<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import { combineStyles, getResponsiveProps, getResponsiveValue } from "$lib/components/utils/css";
	import type { ResponsiveProp } from "$lib/components/utils/types";
	import type { HGridProps } from "./type";

	type $$Props = HGridProps;

	/**
	 * Number of columns to display. Can be a number, a string with a unit or tokens for spesific breakpoints.
	 * Sets `grid-template-columns`, so `fr`, `minmax` etc. works.
	 * @example
	 * columns={{ sm: 1, md: 1, lg: "1fr auto", xl: "1fr auto"}}
	 * @example
	 * columns={3}
	 * @example
	 * columns="repeat(3, minmax(0, 1fr))"
	 */
	export let columns: HGridProps["columns"] = undefined;
	/** Spacing between columns. Based on spacing-tokens.
	 * @example
	 * gap="6"
	 * gap={{ sm: "2", md: "2", lg: "6", xl: "6"}}
	 */
	export let gap: HGridProps["gap"] = undefined;
	/**
	 * Vertical alignment of children. Elements will by default stretch to the height of parent-element.
	 */
	export let align: HGridProps["align"] = undefined;

	/**
	 * HTML element to render as.
	 */
	export let as: HGridProps["as"] = "div";

	function formatGrid(props?: ResponsiveProp<number | string>): ResponsiveProp<number | string> {
		if (!props) {
			return {};
		}

		if (typeof props === "string" || typeof props === "number") {
			return getColumnValue(props);
		}

		return Object.fromEntries(
			Object.entries(props).map(([breakpointToken, columnValue]) => [
				breakpointToken,
				getColumnValue(columnValue),
			]),
		);
	}

	function getColumnValue(prop: number | string) {
		if (typeof prop === "number") {
			return `repeat(${prop}, minmax(0, 1fr))`;
		}

		return prop;
	}
</script>

<svelte:element
	this={as}
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-hgrid")}
	style={combineStyles(
		$$restProps,
		getResponsiveProps(`hgrid`, "gap", "spacing", gap),
		getResponsiveValue(`hgrid`, "columns", formatGrid(columns)),
	)}
	style:--__ac-hgrid-align={align}><slot /></svelte:element
>
