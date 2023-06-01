<script>
	import { Stepper } from "$lib/components/Stepper";
	import { Meta, Story } from "@storybook/addon-svelte-csf";
	import StepperWithHeader from "./StepperWithHeader.svelte";
</script>

<Meta title="components/Stepper" component={Stepper} />

<Story name="Default">
	<StepperWithHeader />
</Story>

<Story name="Horizontal">
	<StepperWithHeader orientation="horizontal" />
</Story>

<Story name="Display only">
	<StepperWithHeader interactive={false} activeStep={2} />
</Story>

<Story name="Wizard">
	<StepperWithHeader activeStep={3} exampleNumCompleted={2} />
</Story>

<style>
</style>
