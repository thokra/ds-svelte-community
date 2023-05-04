<script lang="ts">
	import { classes } from "../helpers";
	import BodyShort from "../typography/BodyShort.svelte";
	import { getTableContext } from "./Table.svelte";

	export let align: "left" | "center" | "right" = "left";

	const ctx = getTableContext();
</script>

<BodyShort
	as="td"
	class={classes($$restProps, "navds-table__data-cell", `navds-table__data-cell--align-${align}`)}
	size={ctx.size}
	{...$$restProps}
>
	<slot />
</BodyShort>
