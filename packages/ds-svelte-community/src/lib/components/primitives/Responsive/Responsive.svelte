<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import type { ResponsiveProps } from "./type";

	type $$Props = ResponsiveProps;
	/**
	 * @example
	 * above='md'
	 */
	export let above: ResponsiveProps["above"] = undefined;
	/**
	 * @example
	 * below='md'
	 */
	export let below: ResponsiveProps["below"] = undefined;

	export let variant: ResponsiveProps["variant"];

	/**
	 * HTML element to render as.
	 */
	export let as: ResponsiveProps["as"] = "div";

	$: aboveProp = variant === "show" ? above : below;
	$: belowProp = variant === "show" ? below : above;
</script>

<svelte:element
	this={as}
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-responsive", {
		[`navds-responsive__above--${aboveProp}`]: !!aboveProp,
		[`navds-responsive__below--${belowProp}`]: !!belowProp,
	})}><slot /></svelte:element
>
