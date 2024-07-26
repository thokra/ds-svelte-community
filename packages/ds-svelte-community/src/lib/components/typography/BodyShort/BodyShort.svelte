<script lang="ts">
	import type { Snippet } from "svelte";
	import type { SvelteHTMLElements } from "svelte/elements";
	import { classes } from "../../helpers";

	type Props = {
		/**
		 * medium: 18px, small: 16px
		 */
		size?: "medium" | "small";
		/**
		 * Adds margin-bottom
		 */
		spacing?: boolean;
		/**
		 * Tag to use for the body
		 */
		as?: keyof SvelteHTMLElements;
		children: Snippet;
		[key: string]: unknown;
	};

	let { size, spacing, as, children, ...restProps }: Props = $props();
</script>

<svelte:element
	this={as}
	{...restProps}
	class={classes(restProps, "navds-body-short", `navds-body-short--${size}`)}
	class:navds-typo--spacing={spacing}
>
	{@render children()}
</svelte:element>
