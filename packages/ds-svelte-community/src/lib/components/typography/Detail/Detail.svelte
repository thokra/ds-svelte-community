<script lang="ts">
	import type { Snippet } from "svelte";
	import type { SvelteHTMLElements } from "svelte/elements";
	import { classes } from "../../helpers";

	type Props = {
		/**
		 * Adds margin-bottom
		 */
		spacing?: boolean;

		/**
		 * All caps
		 */
		uppercase?: boolean;

		/**
		 * Tag to use for the body
		 */
		as?: keyof SvelteHTMLElements;
		children: Snippet;
		[key: string]: unknown;
	};

	let { spacing = false, uppercase = false, as = "p", children, ...restProps }: Props = $props();
</script>

<svelte:element
	this={as}
	{...restProps}
	class={classes(restProps, "navds-detail")}
	class:navds-typo--spacing={spacing}
	class:navds-typo--uppercase={uppercase}
>
	{@render children()}
</svelte:element>
