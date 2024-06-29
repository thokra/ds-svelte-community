<script lang="ts">
	import { classes, omit } from "../helpers";
	import { getTabsContext, type TabPanelProps } from "./type.svelte";

	let { value, children, ...restProps }: TabPanelProps = $props();

	const ctx = getTabsContext();
</script>

<div
	{...omit(restProps, "class", "role", "tabindex", "hidden")}
	role="tabpanel"
	tabindex="0"
	class={classes(restProps, "navds-tabs__tabpanel")}
	hidden={ctx.value != value ? true : undefined}
	id={ctx.idFor("panel", value)}
	aria-labelledby={ctx.idFor("tab", value)}
>
	{#if ctx.value == value}
		{@render children()}
	{/if}
</div>
