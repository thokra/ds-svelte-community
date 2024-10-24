<script lang="ts">
	import { classes } from "../../helpers";
	import type { HeadingProps } from "./type";

	let {
		level = "1",
		size = "medium",
		spacing = false,
		as,
		children,
		...restProps
	}: HeadingProps = $props();
</script>

<svelte:element
	this={as ? as : "h" + level}
	{...restProps}
	class={classes(restProps, "navds-heading", `navds-heading--${size}`)}
	class:navds-typo--spacing={spacing}
>
	{@render children()}
</svelte:element>
