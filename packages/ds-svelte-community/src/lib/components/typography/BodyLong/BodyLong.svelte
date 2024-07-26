<script lang="ts">
	import type { Snippet } from "svelte";
	import { classes } from "../../helpers";

	type Props = {
		/**
		 * The size of the body
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
		as?: "p" | "span";

		children: Snippet;

		[key: string]: unknown;
	};

	let { size = "medium", spacing = false, as = "p", children, ...restProps }: Props = $props();
</script>

<svelte:element
	this={as}
	{...restProps}
	class={classes(restProps, "navds-body-long", `navds-body-long--${size}`)}
	class:navds-typo--spacing={spacing}
>
	{@render children()}
</svelte:element>
