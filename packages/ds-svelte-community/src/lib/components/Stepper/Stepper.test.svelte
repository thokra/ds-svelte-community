<script lang="ts">
	import { Step, Stepper } from ".";
	import type { Props } from "./type.svelte";

	let props: Omit<Props, "children"> = $props();
</script>

<Stepper {...props}>
	<Step href="#f1" completedLabel="Fullført" completed={true}>Account information</Step>
	<Step href="#f2" completedLabel="Fullført" completed={true}>About you</Step>
	<Step href="#f3" completedLabel="Fullført" completed={false}>How did you hear about us</Step>
	<Step href="#f4" completedLabel="Fullført" interactive={false}>Confirmation</Step>
</Stepper>
