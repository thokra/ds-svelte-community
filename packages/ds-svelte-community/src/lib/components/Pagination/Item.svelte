<script lang="ts">
	import Button from "../Button/Button.svelte";
	import { classes, omit } from "../helpers";

	/**
	 * Sets selected styling if true
	 * @default false
	 */
	export let selected = false;

	/**
	 * Changes padding, height and font-size
	 * @default medium
	 */
	export let size: "medium" | "small" | "xsmall" = "medium";

	/**
	 * Prevent the user from interacting with the button: it cannot be pressed or focused.
	 * @note Avoid using if possible for accessibility purposes
	 */
	export let disabled = false;
</script>

<Button
	{...omit($$restProps, "class")}
	variant="tertiary"
	aria-current={selected}
	{disabled}
	{size}
	class={classes($$restProps, "navds-pagination__item", {
		"navds-pagination__item--selected": selected,
	})}
	type="button"
	on:click
>
	<slot />
</Button>
