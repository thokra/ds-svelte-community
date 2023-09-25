<script lang="ts">
	import { Pagination } from "$lib";
	const count = 9;
	let page = 4;

	const pageChange = (e: CustomEvent<{ page: number }>) => {
		page = e.detail.page;
	};
</script>

<Pagination {count} {page} on:change={pageChange} />
