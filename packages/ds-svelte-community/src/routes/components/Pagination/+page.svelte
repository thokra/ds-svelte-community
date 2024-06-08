<script lang="ts">
	import doc from "$lib/components/Pagination/Pagination.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Pagination } from "$lib";

	const count = 9;
	let page = $state(4);

	const pageChange = (e: { page: number }) => {
		page = e.page;
	};
</script>

<Doc {doc}>
	<Story>
		<Pagination {count} {page} onChange={pageChange} />
	</Story>
</Doc>
