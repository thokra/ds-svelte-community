<script lang="ts">
	import { Step, Stepper } from ".";
	import type { Props } from "./type.svelte";

	let props: Omit<Props, "children"> = $props();
</script>

<Stepper {...props}>
	<Step href="#f1" completed={true}>Account information</Step>
	<Step href="#f2" completed={true}>About you</Step>
	<Step href="#f3" completed={false}>How did you hear about us</Step>
	<Step href="#f4" interactive={false}>Confirmation</Step>
</Stepper>
