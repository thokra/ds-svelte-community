<script lang="ts" context="module">
	import type { StackProps } from "./type";
	export type StackPropsTest = StackProps & {
		component: ComponentType;
	};
</script>

<script lang="ts">
	import type { ComponentType } from "svelte";

	export let component: ComponentType;

	type $$Props = StackPropsTest;
</script>

<svelte:component this={component} {...$$restProps}>
	<div />
	<div />
</svelte:component>
