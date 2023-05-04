<script lang="ts">
	import { classes } from "../helpers";
</script>

<tbody class={classes($$restProps, "navds-table__body")} {...$$restProps}>
	<slot />
</tbody>
