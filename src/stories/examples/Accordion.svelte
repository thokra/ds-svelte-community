<script lang="ts">
	import { Accordion, AccordionItem } from "$lib";
</script>

<Accordion>
	<AccordionItem>
		<svelte:fragment slot="heading">Title 1</svelte:fragment>
		Accordion item 1 content
	</AccordionItem>
	<AccordionItem open={true}>
		<svelte:fragment slot="heading">Title 2</svelte:fragment>
		Accordion item 2 content
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="heading">Title 3</svelte:fragment>
		Accordion item 3 content
	</AccordionItem>
</Accordion>
