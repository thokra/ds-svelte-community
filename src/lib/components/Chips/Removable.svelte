<script lang="ts">
	import { XMark } from "$lib/icons";
	import { createEventDispatcher } from "svelte";
	import { classes } from "../helpers";

	/**
	 * Chip-variants
	 * @default "action"
	 */
	export let variant: "action" | "neutral" = "action";
	/**
	 * Replaces label read for screen-readers
	 * @default "slett filter"
	 */
	export let removeLabel = "slett filter";

	/**
	 * Tag to use for the element
	 */
	export let as = "button";

	/**
	 * The content of the chip
	 */
	export let value: string;

	const dispatch = createEventDispatcher();
</script>

<svelte:element
	this={as}
	{...$$restProps}
	class={classes(
		$$restProps,
		"navds-chips__chip",
		"navds-chips__removable",
		`navds-chips__removable--${variant}`,
	)}
	class:navds-chips--icon-right={true}
	aria-label={`${value} ${removeLabel}`}
	on:click={(e) => {
		dispatch("delete");
		$$restProps?.onClick?.(e);
	}}
>
	<span class="navds-chips__chip-text">{value}</span>
	<span class="navds-chips__removable-icon">
		<XMark aria-hidden />
	</span>
</svelte:element>
