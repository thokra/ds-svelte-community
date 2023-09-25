<script lang="ts">
	import type { HTMLAttributes, SvelteHTMLElements } from "svelte/elements";
	import { classes, omit } from "../helpers";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		as?: keyof SvelteHTMLElements;
	}

	/**
	 * HTML element to render as
	 */
	export let as: keyof SvelteHTMLElements = "div";
</script>

<svelte:element
	this={as}
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-link-panel__title", "navds-heading", "navds-heading--medium")}
>
	<!-- Panel title -->
	<slot />
</svelte:element>
