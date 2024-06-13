<script lang="ts">
	import doc from "$lib/components/Select/Select.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Select } from "$lib";

	let value = $state("");
</script>

<Doc {doc}>
	<Story>
		<Select label="Which country do you reside in?" bind:value>
			<option value="">Choose country</option>
			<option value="norway">Norway</option>
			<option value="sweden">Sweden</option>
			<option value="denmark">Denmark</option>
		</Select>
	</Story>

	<Story name="With description">
		<Select label="Which country do you reside in?">
			{#snippet description()}
				Choose the country you spend most of your time in.
			{/snippet}

			<option value="">Choose country</option>
			<option value="norway">Norway</option>
			<option value="sweden">Sweden</option>
			<option value="denmark">Denmark</option>
		</Select>
	</Story>
</Doc>
