<script lang="ts">
	import { Checkbox, CheckboxGroup } from "$lib";
	import type { CheckboxProps, Props } from "./type.svelte";

	let { wrapper, items }: { wrapper: Omit<Props, "children">; items: CheckboxProps[] } = $props();
</script>

<CheckboxGroup legend="" {...wrapper}>
	{#each items as item}
		<Checkbox {...item} />
	{/each}
</CheckboxGroup>
