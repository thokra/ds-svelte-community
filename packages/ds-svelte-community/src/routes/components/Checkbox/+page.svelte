<script lang="ts">
	import checkboxDoc from "$lib/components/Checkbox/Checkbox.svelte?doc";
	import doc from "$lib/components/Checkbox/CheckboxGroup.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Checkbox, CheckboxGroup } from "$lib";

	let selected = $state(false);

	let multiValues: string[] = $state([]);
</script>

<Doc {doc} extraChildrenDoc={[checkboxDoc]}>
	<Story>
		<CheckboxGroup bind:value={multiValues}>
			<Checkbox value="1">Option 1</Checkbox>
			<Checkbox value="2">Option 2</Checkbox>
			<Checkbox value="3">Option 3</Checkbox>
		</CheckboxGroup>

		{JSON.stringify(multiValues)}
	</Story>

	<Story name="Single">
		<Checkbox>Do you agree?</Checkbox>
	</Story>

	<Story name="Bind checked">
		<Checkbox bind:checked={selected}>Checkbox text</Checkbox>
		<p>Checkbox is {selected}</p>
	</Story>
</Doc>
