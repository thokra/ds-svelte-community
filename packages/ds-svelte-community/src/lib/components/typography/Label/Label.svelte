<script lang="ts">
	import type { Snippet } from "svelte";
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
		 * Tag to use for the label
		 */
		as?: "label" | "legend" | "span";

		/**
		 * Content
		 */
		children: Snippet;

		[key: string]: unknown;
	};

	let { size = "medium", spacing = false, as = "label", children, ...restProps }: Props = $props();
</script>

<svelte:element
	this={as}
	{...restProps}
	class={classes(restProps, "navds-label")}
	class:navds-label--small={size == "small"}
	class:navds-typo--spacing={spacing}
>
	{@render children()}
</svelte:element>
