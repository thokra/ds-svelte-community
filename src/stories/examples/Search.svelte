<script lang="ts">
	import { Search } from "$lib";

	function submit() {
		console.log("submit");
	}

	let value = "";
</script>

<form on:submit>
	<Search label="Search this page" bind:value />
</form>
