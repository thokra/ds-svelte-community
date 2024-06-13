<script lang="ts">
	import { Heading } from "$lib";
	import { Step, Stepper } from "$lib/components/Stepper";
	import { orientations } from "$lib/components/Stepper/type.svelte";
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import source from "./examples/StepperWithHeader.svelte?raw";

	let currentStep = 0;
</script>

<Meta
	title="components/Stepper"
	component={Stepper}
	argTypes={{
		orientation: {
			control: "select",
			options: orientations,
			description: "The direction the component grows.",
		},
		activeStep: {
			control: "number",
			description: "Current active step.\n\n*Note: Stepper index starts at 1, not 0*",
		},
		interactive: {
			control: "boolean",
			description: "Makes stepper non-interactive if false",
		},
	}}
	args={{
		orientation: "vertical",
		activeStep: 1,
		interactive: true,
	}}
/>

<Template let:args>
	<Heading size="medium" spacing={true} level="2" id="stepper-heading">Signup steps</Heading>
	<Stepper
		{...args}
		activeStep={currentStep || args.activeStep}
		aria-labelledby="stepper-heading"
		on:change={(e) => {
			const { index, event } = e.detail;
			event.preventDefault();
			currentStep = index;
		}}
	>
		<Step href="#f" completed={args.completed > 0}>Account information</Step>
		<Step href="#f" completed={args.completed > 1}>About you</Step>
		<Step href="#f" completed={args.completed > 2}>How did you hear about us</Step>
		<Step href="#f" completed={args.completed > 3}>Confirmation</Step>
	</Stepper>
</Template>

<Story name="Default" {source} />

<Story name="Horizontal" args={{ orientation: "horizontal" }} />

<Story name="Display only" args={{ interactive: false, activeStep: 2 }} />

<Story name="Wizard" args={{ activeStep: 3, completed: 2 }} />
