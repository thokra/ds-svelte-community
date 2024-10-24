<script lang="ts">
	import type { Snippet } from "svelte";
	import Button from "../Button/Button.svelte";
	import { classes, omit } from "../helpers";

	let {
		selected = false,
		size = "medium",
		disabled = false,
		children,
		iconLeft,
		iconRight,
		...restProps
	}: {
		/**
		 * Sets selected styling if true
		 * @default false
		 */
		selected?: boolean;
		/**
		 * Changes padding, height and font-size
		 * @default medium
		 */
		size?: "medium" | "small" | "xsmall";
		/**
		 * Prevent the user from interacting with the button: it cannot be pressed or focused.
		 * @note Avoid using if possible for accessibility purposes
		 */
		disabled?: boolean;
		/**
		 * Content
		 */
		children?: Snippet;
		/**
		 * Left icon
		 */
		iconLeft?: Snippet;
		/**
		 * Right icon
		 */
		iconRight?: Snippet;

		[key: string]: unknown;
	} = $props();
</script>

<Button
	{...omit(restProps, "class")}
	variant="tertiary"
	aria-current={selected}
	{disabled}
	{size}
	{iconLeft}
	{iconRight}
	{children}
	class={classes(restProps, "navds-pagination__item", {
		"navds-pagination__item--selected": selected,
	})}
	type="button"
/>
