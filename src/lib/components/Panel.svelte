<script lang="ts">
	import type { HTMLAnchorAttributes, SvelteHTMLElements } from "svelte/elements";
	import { classes, omit } from "./helpers";

	/**
	 * Adds a border to panel when true
	 * @default false
	 */
	export let border = false;

	/**
	 * HTML element to render as
	 */
	export let as: keyof SvelteHTMLElements = "div";

	interface $$Props extends HTMLAnchorAttributes {
		border: boolean;
		as: keyof SvelteHTMLElements;
	}
</script>

<svelte:element
	this={as}
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-panel", {
		"navds-panel--border": border,
	})}
>
	<slot />
</svelte:element>
