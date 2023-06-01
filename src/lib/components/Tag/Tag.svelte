<script lang="ts">
	import type { SvelteHTMLElements } from "svelte/elements";
	import BodyShort from "../typography/BodyShort.svelte";
	import Detail from "../typography/Detail.svelte";
	import type { Props, sizes, variants } from "./type";

	type $$Props = Props;

	/**
	 * Changes visual profile of tag.
	 */
	export let variant: (typeof variants)[number] = "info";
	/**
	 * Changes font size.
	 */
	export let size: (typeof sizes)[number] = "medium";
	/**
	 * Tag to use for the element.
	 */
	export let as: keyof SvelteHTMLElements = "span";
</script>

<svelte:component
	this={size == "medium" ? BodyShort : Detail}
	{as}
	size={size == "medium" ? "medium" : "small"}
	class="navds-tag navds-tag--{variant} navds-tag--{size}"
>
	<slot />
</svelte:component>
