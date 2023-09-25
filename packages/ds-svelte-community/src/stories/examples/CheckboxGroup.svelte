<script lang="ts">
	import { Checkbox, CheckboxGroup } from "$lib";

	let value = ["2"];
</script>

<CheckboxGroup legend="Checkbox group" {value}>
	<Checkbox value="1">Checkbox 1</Checkbox>
	<Checkbox value="2">Checkbox 2</Checkbox>
	<Checkbox value="3">Checkbox 3</Checkbox>
</CheckboxGroup>
