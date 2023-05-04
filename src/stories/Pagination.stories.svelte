<script lang="ts">
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Pagination from "$lib/components/Pagination/Pagination.svelte";

	let page = 1;

	const pageChange = (e: CustomEvent<{ page: number }>) => {
		console.log(e.detail.page);
		page = e.detail.page;
	};
</script>

<Meta title="ds-svelte/Pagination" component={Pagination} />

<Template let:args>
	<Pagination {...args} {page} count={9} on:change={pageChange} />
</Template>

<Story name="Default" />

<Story name="Small" args={{ size: "small" }} />

<Story name="XSmall" args={{ size: "xsmall" }} />

<Story name="Prev/Next" args={{ prevNextTexts: true }} />
