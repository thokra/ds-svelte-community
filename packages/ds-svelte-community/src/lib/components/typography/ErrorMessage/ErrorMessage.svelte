<script lang="ts">
	import type { Snippet } from "svelte";
	import { classes } from "../../helpers";

	type Props = {
		/**
		 * The size of the body
		 * medium: 18px, small: 16px
		 */
		size?: "medium" | "small";
		/** Adds margin-bottom */
		spacing?: boolean;
		/** Tag to use for the body */
		as?: "p" | "span";
		children: Snippet;
		[key: string]: unknown;
	};

	let { size = "medium", spacing = false, as = "p", children, ...restProps }: Props = $props();
</script>

<svelte:element
	this={as}
	class={classes(restProps, "navds-error-message", "navds-label")}
	class:navds-label--small={size === "small"}
	class:navds-typo--spacing={!!spacing}
	{...restProps}
>
	{@render children()}
</svelte:element>
