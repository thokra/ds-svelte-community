<script lang="ts">
	import Fieldset from "./Fieldset.svelte";
	import type { FieldsetProps } from "./type";

	let props: Omit<Omit<Omit<FieldsetProps, "children">, "legend">, "description"> = $props();
</script>

<Fieldset {...props}>
	{#snippet legend()}Legend{/snippet}
	{#snippet description()}Description{/snippet}
	Fieldset body
</Fieldset>
