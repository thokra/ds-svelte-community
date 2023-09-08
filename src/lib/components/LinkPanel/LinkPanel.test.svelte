<script lang="ts">
	import LinkPanel from "./LinkPanel.svelte";
	import LinkPanelDescription from "./LinkPanelDescription.svelte";
	import LinkPanelTitle from "./LinkPanelTitle.svelte";
</script>

<LinkPanel href="#link">
	<LinkPanelTitle>Some actionable text</LinkPanelTitle>
	<LinkPanelDescription>A short description about the actions possible</LinkPanelDescription>
</LinkPanel>
