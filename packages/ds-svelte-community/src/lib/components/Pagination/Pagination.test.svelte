<script lang="ts">
	import Pagination from "./Pagination.svelte";
	import type { Props } from "./type";

	let props: Props = $props();
</script>

<Pagination {...props}></Pagination>
