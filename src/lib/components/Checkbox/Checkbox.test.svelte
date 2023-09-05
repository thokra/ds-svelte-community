<script lang="ts" context="module">
	export type ItemProps = {
		value: string;
		content: string;
	};
</script>

<script lang="ts">
	import { Checkbox, CheckboxGroup } from "$lib";
	import { omit } from "../helpers";
	import type { Props } from "./type";

	export let wrapper: Props;
	export let items: ItemProps[];

	const omitter = (item: ItemProps) => omit(item, "content") as { value: string };
</script>

<CheckboxGroup {...wrapper}>
	{#each items as item}
		<Checkbox {...omitter(item)}>{item.content}</Checkbox>
	{/each}
</CheckboxGroup>
