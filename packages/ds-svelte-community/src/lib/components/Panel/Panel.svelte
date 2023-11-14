<script lang="ts">
	import type { SvelteHTMLElements } from "svelte/elements";
	import { classes, omit } from "../helpers";
	import type { Props } from "./type";

	console.warn("Panel is deprecated and will be removed in a future release.");

	type $$Props = Props;

	/**
	 * Adds a border to panel when true.
	 * @default false
	 */
	export let border = false;

	/**
	 * HTML element to render as.
	 */
	export let as: keyof SvelteHTMLElements = "div";
</script>

<svelte:element
	this={as}
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-panel", {
		"navds-panel--border": border,
	})}
>
	<!-- Panel content -->
	<slot />
</svelte:element>
