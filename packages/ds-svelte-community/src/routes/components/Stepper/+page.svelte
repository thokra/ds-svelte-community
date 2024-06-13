<script lang="ts">
	import doc from "$lib/components/Stepper/Stepper.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import Story from "$doclib/Story.svelte";
	import { Step, Stepper } from "$lib";

	let activeStep = $state(3);
</script>

<Doc {doc}>
	<Story>
		<Stepper
			aria-labelledby="stepper-heading"
			{activeStep}
			onChange={(index, event) => {
				event.preventDefault();
				activeStep = index;
			}}
		>
			<Step href="#f" completed={true}>Account information</Step>
			<Step href="#f" completed={activeStep > 2}>About you</Step>
			<Step href="#f">How did you hear about us</Step>
			<Step href="#f" interactive={false}>Confirmation</Step>
		</Stepper>
	</Story>
</Doc>
