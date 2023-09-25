<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { BodyProps } from "./type";

	type $$Props = BodyProps;
</script>

<tbody {...omit($$restProps, "class")} class={classes($$restProps, "navds-table__body")}>
	<!-- Content -->
	<slot />
</tbody>
