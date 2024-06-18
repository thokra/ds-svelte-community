<script lang="ts">
	import doc from "$lib/components/Switch/Switch.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Switch } from "$lib";

	let activeStep = $state(2);
</script>

<Doc {doc}>
	<Story>
		<Switch>Switch label</Switch>
	</Story>
</Doc>
