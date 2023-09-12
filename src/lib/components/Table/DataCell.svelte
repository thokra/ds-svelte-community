<script lang="ts">
	import { classes, omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import { aligns, getTableContext, type DataCellProps } from "./type";

	type $$Props = DataCellProps;

	export let align: (typeof aligns)[number] | undefined = undefined;

	const ctx = getTableContext();
</script>

<BodyShort
	{...omit($$restProps)}
	as="td"
	class={classes($$restProps, "navds-table__data-cell", {
		[`navds-table__data-cell--align-${align}`]: !!align,
	})}
	size={ctx.size}
>
	<!-- Content -->
	<slot />
</BodyShort>
