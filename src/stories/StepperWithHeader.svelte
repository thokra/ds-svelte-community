<script lang="ts">
	import { Step, Stepper } from "$lib/components/Stepper";
	import Heading from "$lib/components/typography/Heading.svelte";

	export let activeStep = 1;

	export let orientation: "vertical" | "horizontal" | undefined = "vertical";
	export let interactive = true;

	export let exampleNumCompleted = 0;
</script>

<Heading size="medium" spacing={true} level="2" id="stepper-heading">Signup steps</Heading>
<Stepper
	aria-labelledby="stepper-heading"
	{activeStep}
	{orientation}
	{interactive}
	on:change={(e) => {
		const { index, event } = e.detail;
		event.preventDefault();
		activeStep = index;
	}}
>
	<Step href="#f" completed={exampleNumCompleted > 0}>Account information</Step>
	<Step href="#f" completed={exampleNumCompleted > 1}>About you</Step>
	<Step href="#f" completed={exampleNumCompleted > 2}>How did you hear about us</Step>
	<Step href="#f" completed={exampleNumCompleted > 3}>Confirmation</Step>
</Stepper>
