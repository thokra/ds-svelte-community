<!--
@component
Tagging a situation with topics or statuses can improve the overview for users. It is a way to gather concise information about a situation in one place, so that users can get the information they need at a glance. Tags look like labels that people are used to from the physical world.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/tag).
-->

<script lang="ts">
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import Detail from "../typography/Detail/Detail.svelte";
	import type { Props } from "./type";

	let { variant = "info", size = "medium", as = "span", children, text }: Props = $props();

	const Component = $derived(size == "medium" ? BodyShort : Detail);
</script>

<Component
	{as}
	size={size == "medium" ? "medium" : "small"}
	class="navds-tag navds-tag--{variant} navds-tag--{size}"
>
	{#if children}
		{@render children()}
	{:else}
		{text}
	{/if}
</Component>
