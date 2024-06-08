<script lang="ts">
	import doc from "$lib/components/ErrorSummary/ErrorSummary.svelte?doc";
	import itemDoc from "$lib/components/ErrorSummary/ErrorSummaryItem.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { ErrorSummary, ErrorSummaryItem } from "$lib";
</script>

<Doc {doc} preview={{ width: "60%" }} extraChildrenDoc={[itemDoc]}>
	<Story>
		<ErrorSummary heading="Some errors occurred">
			<ErrorSummaryItem href="#input-1">Checkbox needs to be checked</ErrorSummaryItem>
			<ErrorSummaryItem href="#input-2">Textfield requires valid email</ErrorSummaryItem>
		</ErrorSummary>
	</Story>
</Doc>
