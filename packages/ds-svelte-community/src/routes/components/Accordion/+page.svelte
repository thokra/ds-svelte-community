<script lang="ts">
	import doc from "$lib/components/Accordion/Accordion.svelte?doc";
	import itemDoc from "$lib/components/Accordion/AccordionItem.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Accordion, AccordionItem } from "$lib";
</script>

<Doc {doc} extraChildrenDoc={[itemDoc]} preview={{ width: "80%" }}>
	<Story>
		<Accordion>
			<AccordionItem heading="hello world">Content</AccordionItem>
			<AccordionItem>
				{#snippet heading()}Heading 2{/snippet}

				Some other content
			</AccordionItem>
			<AccordionItem heading="Heading 3" open>This is default open</AccordionItem>
		</Accordion>
	</Story>
</Doc>
