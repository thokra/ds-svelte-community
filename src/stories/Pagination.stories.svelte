<script lang="ts">
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Pagination from "$lib/components/Pagination/Pagination.svelte";
	import { sizes } from "$lib/components/Pagination/type";
	import source from "./examples/Pagination.svelte?raw";

	let page = 1;

	const pageChange = (e: CustomEvent<{ page: number }>) => {
		console.log(e.detail.page);
		page = e.detail.page;
	};
</script>

<Meta
	title="components/Pagination"
	component={Pagination}
	argTypes={{
		page: {
			description: `
Current page. If set will require implementation of \`on:change\` event.

**Note:** Pagination indexing starts at 1
`,
		},
		siblingCount: {
			description: "Number of always visible pages before and after the current page.",
		},
		boundaryCount: {
			description: "Number of always visible pages at the beginning and end.",
		},
		count: {
			control: "number",
			type: { name: "number", required: true },
			description: "Total number of pages.",
			table: { type: { summary: "number" } },
		},
		size: {
			control: "select",
			options: sizes,
			description: "Changes padding, height and font-size.",
		},
		nextText: {
			description: "Next label.",
		},
		prevText: {
			description: "Previous label.",
		},
		prevNextTexts: {
			description: "Show next and previous buttons with text.",
		},
	}}
	args={{ count: 9 }}
/>

<Template let:args>
	<Pagination {...args} page={args.page ?? page} on:change={pageChange} />
</Template>

<Story name="Default" {source} />

<Story name="Small" args={{ size: "small" }} />

<Story name="XSmall" args={{ size: "xsmall" }} />

<Story name="Prev/Next" args={{ prevNextTexts: true }} />
