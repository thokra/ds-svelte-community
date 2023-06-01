<script lang="ts">
	import { classes, omit } from "../helpers";
	import { getTabsContext, type TabPanelProps } from "./type";

	type $$Props = TabPanelProps;

	export let value: string;

	const ctx = getTabsContext();
	const currentValue = ctx.value;
</script>

<div
	{...omit($$restProps, "class", "role", "tabindex", "hidden")}
	role="tabpanel"
	tabindex="0"
	class={classes($$restProps, "navds-tabs__tabpanel")}
	hidden={$currentValue != value ? true : undefined}
>
	<slot />
</div>
