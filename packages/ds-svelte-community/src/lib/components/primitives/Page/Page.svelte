<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import type { PageProps } from "./type";

	let {
		as = "div",
		background = "bg-default",
		footerPosition = undefined,
		contentBlockPadding = "end",
		children,
		footer,
		...restProps
	}: PageProps = $props();

	let belowFold = $derived(footerPosition === "belowFold");
</script>

<svelte:element
	this={as}
	{...omit(restProps, "class", "style")}
	class={classes(restProps, "navds-page")}
	style={`--__ac-page-background: var(--a-${background}) ${restProps.style || ""}`}
>
	<div
		class={classes(
			{},
			{
				"navds-page__content--fullheight": belowFold,
				"navds-page__content--grow": !belowFold,
				"navds-page__content--padding": contentBlockPadding === "end",
			},
		)}
	>
		{@render children()}
	</div>

	{#if footer}
		{@render footer()}
	{/if}
</svelte:element>
