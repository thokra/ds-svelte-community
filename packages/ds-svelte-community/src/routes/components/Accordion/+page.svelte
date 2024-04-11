<script lang="ts">
	import doc from "$lib/components/Accordion/Accordion.svelte?doc";
	import itemDoc from "$lib/components/Accordion/AccordionItem.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Accordion from "$lib/components/Accordion/Accordion.svelte";
	import AccordionItem from "$lib/components/Accordion/AccordionItem.svelte";
</script>

<Doc {doc} component={Accordion} extraChildrenDoc={[itemDoc]} preview={{ width: "80%" }}>
	{#snippet previewChild()}
		<AccordionItem heading="hello world">Content</AccordionItem>
		<AccordionItem>
			{#snippet heading()}Heading 2{/snippet}

			Some other content
		</AccordionItem>
		<AccordionItem heading="Heading 3" open>Content 3</AccordionItem>
	{/snippet}
</Doc>
