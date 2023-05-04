<script lang="ts">
	import { Checkmark } from "$lib/icons";
	import { classes } from "../helpers";

	/**
	 * Toggles aria-pressed and visual-changes
	 */
	export let selected = false;

	/**
	 * Tag to use for the element
	 */
	export let as = "button";

	/**
	 * The content of the chip
	 */
	export let value: string;
</script>

<svelte:element
	this={as}
	{...$$restProps}
	class={classes($$restProps, "navds-chips__chip", "navds-chips__toggle")}
	class:navds-chips--icon-left={selected}
	aria-pressed={selected}
	on:click
>
	{#if selected}
		<Checkmark aria-hidden class="navds-chips__toggle-icon" />
	{/if}

	<span class="navds-chips__chip-text">{value}</span>
</svelte:element>
