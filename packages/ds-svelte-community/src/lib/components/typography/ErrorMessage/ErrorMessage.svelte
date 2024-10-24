<script lang="ts">
	import { classes } from "../../helpers";
	import type { ErrorMessageProps } from "./type";

	let {
		size = "medium",
		spacing = false,
		as = "p",
		children,
		...restProps
	}: ErrorMessageProps = $props();
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
