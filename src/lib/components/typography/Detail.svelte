<script lang="ts">
	import { classes } from "../helpers";

	/**
	 * Adds margin-bottom
	 */
	export let spacing = false;

	/**
	 * All caps
	 */
	export let uppercase = false;

	/**
	 * Tag to use for the body
	 */
	export let as = "p";
</script>

<svelte:element
	this={as}
	{...$$restProps}
	class={classes($$restProps, "navds-detail")}
	class:navds-typo--spacing={spacing}
	class:navds-typo--uppercase={uppercase}
>
	<slot />
</svelte:element>
