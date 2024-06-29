<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { HeaderProps } from "./type.svelte";

	let { children, ...restProps }: HeaderProps = $props();
</script>

<thead {...omit(restProps, "class")} class={classes(restProps, "navds-table__header")}>
	{@render children()}
</thead>
