<script lang="ts">
	import { classes } from "../../helpers";
	import type { BodyShortProps } from "./type";

	let { size = "medium", spacing, as = "p", children, ...restProps }: BodyShortProps = $props();
</script>

<svelte:element
	this={as}
	{...restProps}
	class={classes(restProps, "navds-body-short", `navds-body-short--${size}`)}
	class:navds-typo--spacing={spacing}
>
	{@render children()}
</svelte:element>
