<script lang="ts">
	import MagnifyingGlassIcon from "$lib/icons/MagnifyingGlassIcon.svelte";
	import Button from "../Button/Button.svelte";
	import { classes } from "../helpers";

	/**
	 * Size of button.
	 */
	export let size: "medium" | "small" = "medium";

	/**
	 * Button variant
	 */
	export let variant: "primary" | "secondary" = "primary";

	/**
	 * Disables element
	 */
	export let disabled = false;
	/**
	 * Loading state
	 */
	export let loading = false;

	/**
	 * Aria label for icon
	 */
	export let searchIconText: string = "";
</script>

<Button
	type="submit"
	on:click
	{size}
	{variant}
	{loading}
	class={classes($$restProps, "navds-search__button-search")}
	{disabled}
	><svelte:fragment slot="icon-left"><MagnifyingGlassIcon title={searchIconText} /></svelte:fragment
	></Button
>
