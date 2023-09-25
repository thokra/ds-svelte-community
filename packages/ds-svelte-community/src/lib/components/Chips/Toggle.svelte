<script lang="ts">
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

	/**
	 * Chip-variants
	 */
	export let variant: ToggleProps["variant"] = "action";
</script>

<!-- Called when the user clicks the toggle -->
<button
	{...omit($$restProps, "class")}
	class={classes(
		$$restProps,
		"navds-chips__chip",
		"navds-chips__toggle",
		`navds-chips__toggle--${variant}`,
	)}
	aria-pressed={selected}
	on:click
>
	{#if selected}
		<svg
			aria-hidden="true"
			class="navds-chips__toggle-icon"
			width="10"
			height="8"
			viewBox="0 0 10 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			focusable="false"
			role="img"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M9.51894 0.45851C9.81799 0.745107 9.8281 1.21987 9.5415 1.51893L3.7915 7.51893C3.51247 7.81009 3.05315 7.82848 2.75174 7.56056L0.501735 5.56056C0.192148 5.28537 0.164263 4.81132 0.439451 4.50173C0.71464 4.19214 1.18869 4.16426 1.49828 4.43944L3.20835 5.95951L8.45852 0.481072C8.74511 0.182015 9.21988 0.171913 9.51894 0.45851Z"
				fill="currentColor"
			/>
		</svg>
	{/if}

	<!-- Content of the ToggleChip. Falls back to `value` prop if no content. -->
	<span class="navds-chips__chip-text"><slot>{value}</slot></span>
</button>
