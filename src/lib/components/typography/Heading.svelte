<script lang="ts">
	import { classes } from "../helpers";

	/**
	 * Heading level
	 * @default "1"
	 */
	export let level: "1" | "2" | "3" | "4" | "5" | "6" = "1";

	/**
	 * Heading size
	 * @default "medium"
	 */
	export let size: "xlarge" | "large" | "medium" | "small" | "xsmall" = "medium";

	/**
	 * Adds margin-bottom
	 * @default false
	 */
	export let spacing = false;

	/**
	 * Tag to use for the heading
	 */
	export let as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | null = null;
</script>

<svelte:element
	this={as ? as : "h" + level}
	{...$$restProps}
	class={classes($$restProps, "navds-heading", `navds-heading--${size}`)}
	class:navds-typo--spacing={spacing}
>
	<slot />
</svelte:element>
