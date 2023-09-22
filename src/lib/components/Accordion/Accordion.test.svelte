<script lang="ts" context="module">
	import type { ItemProps } from "./type";
	type TestItem = ItemProps & { content: string };

	export type TestProps = {
		items: TestItem[];
	};
</script>

<script lang="ts">
	import { omit } from "../helpers";
	import Accordion from "./Accordion.svelte";
	import AccordionItem from "./AccordionItem.svelte";

	export let items: TestItem[];
</script>

<Accordion>
	{#each items as item}
		<AccordionItem {...omit(item, "content")} showMoreText="Vis mer">{item.content}</AccordionItem>
	{/each}
</Accordion>
