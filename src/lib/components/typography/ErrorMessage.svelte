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
	 * Element to render as
	 */
	export let as: "p" | "span" | "div" = "p";
</script>

<svelte:element
	this={as}
	class={classes($$restProps, "navds-error-message", "navds-label")}
	class:navds-label--small={size === "small"}
	class:navds-typo--spacing={!!spacing}
	{...$$restProps}
>
	<slot />
</svelte:element>
