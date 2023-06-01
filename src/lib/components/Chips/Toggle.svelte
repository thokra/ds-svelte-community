<script lang="ts">
	import { Checkmark } from "$lib/icons";
	import { classes, omit } from "../helpers";
	import type { ToggleProps } from "./type";

	type $$Props = ToggleProps;

	/**
	 * Toggles aria-pressed and visual-changes
	 */
	export let selected = false;

	/**
	 * The content of the chip
	 */
	export let value: string;
</script>

<!-- Called when the user clicks the toggle -->
<button
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-chips__chip", "navds-chips__toggle")}
	class:navds-chips--icon-left={selected}
	aria-pressed={selected}
	on:click
>
	{#if selected}
		<Checkmark aria-hidden class="navds-chips__toggle-icon" />
	{/if}

	<!-- Content of the ToggleChip. Falls back to `value` prop if no content. -->
	<span class="navds-chips__chip-text"><slot>{value}</slot></span>
</button>
