<script lang="ts">
	import { classes } from "../../helpers";
	import type { BodyLongProps } from "./type";

	let {
		size = "medium",
		spacing = false,
		as = "p",
		children,
		...restProps
	}: BodyLongProps = $props();
</script>

<svelte:element
	this={as}
	{...restProps}
	class={classes(restProps, "navds-body-long", `navds-body-long--${size}`)}
	class:navds-typo--spacing={spacing}
>
	{@render children()}
</svelte:element>
