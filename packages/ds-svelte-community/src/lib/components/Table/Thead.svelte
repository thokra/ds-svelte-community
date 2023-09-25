<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { HeaderProps } from "./type";
	type $$Props = HeaderProps;
</script>

<thead {...omit($$restProps, "class")} class={classes($$restProps, "navds-table__header")}>
	<!-- Content -->
	<slot />
</thead>
