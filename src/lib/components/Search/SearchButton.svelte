<script lang="ts">
	import { MagnifyingGlass as Search } from "$lib/icons";
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
</script>

<Button
	type="submit"
	on:click
	{size}
	{variant}
	{loading}
	class={classes($$restProps, "navds-search__button-search")}
	{disabled}
	><svelte:fragment slot="icon-left"><Search focusable="false" role="img" /></svelte:fragment
	></Button
>
