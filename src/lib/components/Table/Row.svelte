<script lang="ts">
	import { classes } from "../helpers";

	export let selected = false;
	export let shadeOnHover = true;
</script>

<tr
	class={classes($$restProps, "navds-table__row")}
	class:navds-table__row--selected={selected}
	class:navds-table__row--shade-on-hover={shadeOnHover}
	{...$$restProps}
>
	<slot />
</tr>
