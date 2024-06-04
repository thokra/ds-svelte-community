<script lang="ts">
	import checkboxDoc from "$lib/components/Checkbox/Checkbox.svelte?doc";
	import doc from "$lib/components/Checkbox/CheckboxGroup.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Checkbox, CheckboxGroup } from "$lib";

	let selected = $state(false);

	let multiValues: string[] = $state(["2"]);

	let child1 = $state(true);
	let child2 = $state(false);
</script>

<Doc customTitle="Checkbox" {doc} extraChildrenDoc={[checkboxDoc]}>
	<Story>
		<CheckboxGroup legend="Choose options" bind:value={multiValues}>
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

	<Story name="Indeterminate" locked>
		<div>
			<Checkbox
				value="parent"
				indeterminate={child1 != child2}
				checked={child1 && child2}
				onchange={(e) => {
					child1 = child2 = e.currentTarget.checked;
				}}
			>
				Parent
			</Checkbox>
			<div class="children">
				<Checkbox value="1" bind:checked={child1}>Child 1</Checkbox>
				<Checkbox value="2" bind:checked={child2}>Child 2</Checkbox>
			</div>
		</div>
	</Story>
</Doc>

<style>
	.children {
		margin-left: 1rem;
	}
</style>
