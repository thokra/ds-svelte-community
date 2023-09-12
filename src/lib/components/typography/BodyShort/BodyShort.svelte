<script lang="ts">
	import type { SvelteHTMLElements } from "svelte/elements";
	import { classes } from "../../helpers";

	/**
	 * medium: 18px, small: 16px
	 * @default "medium"
	 */
	export let size: "medium" | "small" = "medium";

	/**
	 * Adds margin-bottom
	 */
	export let spacing = false;

	/**
	 * Tag to use for the body
	 */
	export let as: keyof SvelteHTMLElements = "p";
</script>

<svelte:element
	this={as}
	{...$$restProps}
	class={classes($$restProps, "navds-body-short", `navds-body-short--${size}`)}
	class:navds-typo--spacing={spacing}
>
	<slot />
</svelte:element>
