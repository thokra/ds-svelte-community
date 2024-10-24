<script lang="ts" module>
	import type { Component } from "svelte";
	import type { StackProps } from "./type";
	export interface StackPropsTest extends Omit<StackProps, "children"> {
		component: Component;
	}
</script>

<script lang="ts">
	let { component, ...restProps }: StackPropsTest = $props();

	const SvelteComponent = $derived(component);
</script>

<SvelteComponent {...restProps}>
	<div></div>
	<div></div>
</SvelteComponent>
