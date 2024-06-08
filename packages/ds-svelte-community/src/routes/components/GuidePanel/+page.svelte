<script lang="ts">
	import doc from "$lib/components/GuidePanel/GuidePanel.svelte?doc";
	import illustrationDoc from "$lib/components/GuidePanel/GuidePanelIllustration.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { GuidePanel } from "$lib";
	import { SunIcon } from "$lib/icons";
</script>

<Doc {doc} preview={{ width: "60%" }} extraChildrenDoc={[illustrationDoc]}>
	<Story>
		<GuidePanel>
			Sit sint eu dolore reprehenderit exercitation labore aute anim sit adipisicing proident.
			Tempor ipsum ea cupidatat qui esse do veniam cupidatat. Excepteur irure reprehenderit esse
			tempor nisi duis qui ea enim id.
		</GuidePanel>
	</Story>

	<Story name="Custom illustration">
		<GuidePanel>
			{#snippet illustration()}
				<SunIcon />
			{/snippet}
			Sit sint eu dolore reprehenderit exercitation labore aute anim sit adipisicing proident. Tempor
			ipsum ea cupidatat qui esse do veniam cupidatat. Excepteur irure reprehenderit esse tempor nisi
			duis qui ea enim id.
		</GuidePanel>
	</Story>
</Doc>
