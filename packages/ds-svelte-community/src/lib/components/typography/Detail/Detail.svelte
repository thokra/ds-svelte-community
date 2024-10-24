<script lang="ts">
	import { classes } from "../../helpers";
	import type { DetailProps } from "./type";

	let {
		spacing = false,
		uppercase = false,
		as = "p",
		children,
		...restProps
	}: DetailProps = $props();
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
