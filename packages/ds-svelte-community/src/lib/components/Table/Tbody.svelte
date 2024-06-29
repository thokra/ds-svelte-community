<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { BodyProps } from "./type.svelte";

	let { children, ...restProps }: BodyProps = $props();
</script>

<tbody {...omit(restProps, "class")} class={classes(restProps, "navds-table__body")}>
	<!-- Content -->
	{@render children()}
</tbody>
