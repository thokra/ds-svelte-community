<script lang="ts">
	import Page from "./Page.svelte";
	import PageBlock from "./PageBlock.svelte";

	import type { PageProps } from "./type";

	let props: Omit<PageProps, "children"> = $props();
</script>

<Page {...props}>
	<PageBlock gutters width="lg">Header</PageBlock>
	<PageBlock gutters width="lg">Content</PageBlock>
	{#snippet footer()}
	
			<PageBlock as="footer">Footer</PageBlock>
		
	{/snippet}
</Page>
