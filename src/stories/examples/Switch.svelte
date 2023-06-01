<script lang="ts">
	import { Switch } from "$lib";

	let checked = false;
</script>

<Switch bind:checked />

<p>Is checked: {checked}</p>
