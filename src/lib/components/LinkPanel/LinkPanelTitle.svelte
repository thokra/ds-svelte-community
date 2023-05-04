<script lang="ts">
	import type { HTMLAttributes, SvelteHTMLElements } from "svelte/elements";
	import { classes, omit } from "../helpers";

	/**
	 * HTML element to render as
	 */
	export let as: keyof SvelteHTMLElements = "div";

	interface $$Props extends HTMLAttributes<HTMLElement> {
		as?: keyof SvelteHTMLElements;
	}
</script>

<svelte:element
	this={as}
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-link-panel__title", "navds-heading", "navds-heading--medium")}
>
	<slot />
</svelte:element>
