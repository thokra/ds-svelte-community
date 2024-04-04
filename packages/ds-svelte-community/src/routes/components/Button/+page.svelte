<script lang="ts">
	import props from "$lib/components/Button/Button.svelte?doc";
</script>

<h1>Button</h1>

{#if props.description}
	<p>
		{props.description}
	</p>
{/if}
