<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { TableRowProps } from "./type";

	type $$Props = TableRowProps;

	/**
	 * Highlight row as selected.
	 */
	export let selected = false;
	/**
	 * Shade row on hover.
	 */
	export let shadeOnHover = true;
</script>

<tr
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-table__row")}
	class:navds-table__row--selected={selected}
	class:navds-table__row--shade-on-hover={shadeOnHover}
>
	<!-- Content -->
	<slot />
</tr>
