<script lang="ts">
	import Pagination from "./Pagination.svelte";
	import type { Props } from "./type";

	type $$Props = Props;

	const tshack = (v: object) => v as Props;
</script>

<Pagination {...tshack($$props)}></Pagination>
