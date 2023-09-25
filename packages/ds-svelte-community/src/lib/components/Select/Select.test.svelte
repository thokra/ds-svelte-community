<script lang="ts">
	import Select from "./Select.svelte";
	import type { Props } from "./type";

	type $$Props = Props;
</script>

<Select {...$$props}>
	<option value="">Choose country</option>
	<option value="norway">Norway</option>
	<option value="sweden">Sweden</option>
	<option value="denmark">Denmark</option>
</Select>
