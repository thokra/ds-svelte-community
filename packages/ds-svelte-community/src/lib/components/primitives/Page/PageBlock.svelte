<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import type { PageBlockProps } from "./type";

	let {
		as = "div",
		width = undefined,
		gutters = false,
		children,
		...restProps
	}: PageBlockProps = $props();
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class", "style")}
	class={classes(restProps, "navds-pageblock", `navds-pageblock--${width}`, {
		"navds-pageblock--gutters": !!gutters,
	})}
>
	{@render children()}
</svelte:element>
