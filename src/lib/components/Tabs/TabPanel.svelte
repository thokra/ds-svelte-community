<script lang="ts">
	import { getContext } from "svelte";
	import { classes } from "../helpers";
	import { contextKey, type TabContext } from "./Tabs.svelte";

	export let value: string;

	const ctx = getContext<TabContext>(contextKey);
	const currentValue = ctx.value;
</script>

<div
	role="tabpanel"
	tabindex="0"
	class={classes($$restProps, "navds-tabs__tabpanel")}
	hidden={$currentValue != value}
>
	<slot />
</div>
