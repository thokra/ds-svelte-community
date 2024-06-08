<script lang="ts">
	import MagnifyingGlassIcon from "$lib/icons/MagnifyingGlassIcon.svelte";
	import Button from "../Button/Button.svelte";
	import { classes } from "../helpers";

	let {
		size = "medium",
		variant = "primary",
		loading = false,
		disabled = false,
		searchIconText = "",
		...restProps
	}: {
		/**
		 * Size of button.
		 */
		size?: "medium" | "small";
		/**
		 * Button variant
		 */
		variant?: "primary" | "secondary";
		/**
		 * Loading state
		 */
		loading?: boolean;
		/**
		 * Disables element
		 */
		disabled?: boolean;
		/**
		 * Aria label for icon
		 */
		searchIconText?: string;
		[key: string]: unknown;
	} = $props();
</script>

<Button
	type="submit"
	{size}
	{variant}
	{loading}
	class={classes(restProps, "navds-search__button-search")}
	{disabled}
>
	{#snippet iconLeft()}
		<MagnifyingGlassIcon title={searchIconText} />
	{/snippet}
</Button>
