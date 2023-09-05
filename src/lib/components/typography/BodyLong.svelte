<script lang="ts">
	import { classes } from "../helpers";

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
	export let as = "p";
</script>

<svelte:element
	this={as}
	{...$$restProps}
	class={classes($$restProps, "navds-body-long", `navds-body-long--${size}`)}
	class:navds-typo--spacing={spacing}
>
	<slot />
</svelte:element>
