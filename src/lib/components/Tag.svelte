<script lang="ts">
	import BodyShort from "./typography/BodyShort.svelte";
	import Detail from "./typography/Detail.svelte";

	/**
	 * Changes visual profile of tag
	 */
	export let variant:
		| "warning"
		| "warning-filled"
		| "error"
		| "error-filled"
		| "info"
		| "info-filled"
		| "success"
		| "success-filled"
		| "neutral"
		| "neutral-filled"
		| "alt1"
		| "alt1-filled"
		| "alt2"
		| "alt2-filled"
		| "alt3"
		| "alt3-filled";
	/**
	 * @default "medium"
	 */
	export let size: "medium" | "small" | "xsmall" = "medium";

	/**
	 * Tag to use for the element
	 */
	export let as = "span";
</script>

<svelte:component
	this={size == "medium" ? BodyShort : Detail}
	{as}
	size={size == "medium" ? "medium" : "small"}
	class="navds-tag navds-tag--{variant} navds-tag--{size}"
>
	<slot />
</svelte:component>
