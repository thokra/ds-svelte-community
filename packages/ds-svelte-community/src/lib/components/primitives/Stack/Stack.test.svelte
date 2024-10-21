<script lang="ts" module>
	import type { Component } from "svelte";
	import type { StackProps } from "./type";
	export type StackPropsTest = Omit<StackProps, "children"> & {
		component: Component;
	};
</script>

<script lang="ts">
	let { component, ...restProps }: StackPropsTest = $props();
</script>

<svelte:component this={component} {...restProps}>
	<div></div>
	<div></div>
</svelte:component>
