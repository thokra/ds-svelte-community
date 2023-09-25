<script lang="ts">
	import { Heading, Step, Stepper } from "$lib";

	export let activeStep = 1;

	export let exampleNumCompleted = 0;
</script>

<Heading size="medium" spacing={true} level="2" id="stepper-heading">Signup steps</Heading>
<Stepper
	aria-labelledby="stepper-heading"
	activeStep={3}
	on:change={(e) => {
		const { index, event } = e.detail;
		event.preventDefault();
		activeStep = index;
	}}
>
	<Step href="#f" completed={true}>Account information</Step>
	<Step href="#f" completed={true}>About you</Step>
	<Step href="#f" completed={exampleNumCompleted > 2}>How did you hear about us</Step>
	<Step href="#f" interactive={false}>Confirmation</Step>
</Stepper>
