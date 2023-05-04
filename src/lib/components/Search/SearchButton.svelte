<script lang="ts">
	import { MagnifyingGlass as Search } from "$lib/icons";
	import Button from "../Button.svelte";
	import { classes } from "../helpers";

	export let size: "medium" | "small" = "medium";

	export let variant: "primary" | "secondary" = "primary";

	export let disabled = false;
</script>

<!-- todo: Fix bug with ordering, border radius from `navds-search__button-search` is overridden -->
<Button
	type="submit"
	on:click
	{size}
	{variant}
	class={classes($$restProps, "navds-search__button-search")}
	{disabled}><Search slot="icon-left" /></Button
>
