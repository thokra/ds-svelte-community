<script lang="ts">
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import Detail from "../typography/Detail/Detail.svelte";
	import type { Props } from "./type";

	let { variant = "info", size = "medium", as = "span", children, text }: Props = $props();
</script>

<svelte:component
	this={size == "medium" ? BodyShort : Detail}
	{as}
	size={size == "medium" ? "medium" : "small"}
	class="navds-tag navds-tag--{variant} navds-tag--{size}"
>
	{#if children}
		{@render children()}
	{:else}
		{text}
	{/if}
</svelte:component>
