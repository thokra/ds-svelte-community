<script lang="ts">
	import type { Snippet } from "svelte";
	import { classes } from "../../helpers";

	type Props = {
		/** Heading level */
		level?: "1" | "2" | "3" | "4" | "5" | "6";
		/** Heading size */
		size?: "xlarge" | "large" | "medium" | "small" | "xsmall";
		/** Adds margin-bottom */
		spacing?: boolean;
		/** Tag to use for the heading */
		as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | undefined;

		children: Snippet;
		[key: string]: unknown;
	};

	let {
		level = "1",
		size = "medium",
		spacing = false,
		as,
		children,
		...restProps
	}: Props = $props();
</script>

<svelte:element
	this={as ? as : "h" + level}
	{...restProps}
	class={classes(restProps, "navds-heading", `navds-heading--${size}`)}
	class:navds-typo--spacing={spacing}
>
	{@render children()}
</svelte:element>
