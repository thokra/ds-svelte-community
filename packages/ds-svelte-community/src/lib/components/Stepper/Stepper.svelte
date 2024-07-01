<!--
@component
Stepper can be used to indicate where the user is in a process. Can be used for navigation patterns between steps, or for a visual guide on progression. The component itself should be a supplement to other patterns or indicators, and should not be the only way to navigate a solution.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/stepper).
-->

<script lang="ts">
	import { setContext } from "svelte";
	import { classes, omit } from "../helpers";
	import { StepperContext, contextKey, type Props } from "./type.svelte";

	let {
		orientation = "vertical",
		activeStep = 1,
		interactive = true,
		onChange,
		children,
		...restProps
	}: Props = $props();

	const context = new StepperContext(activeStep, orientation, interactive, onChange);
	$effect(() => {
		context.activeStep = activeStep;
		context.orientation = orientation;
		context.interactive = interactive;
		context.onChange = onChange;
	});

	setContext<StepperContext>(contextKey, context);
</script>

<ol
	{...omit(restProps, "class")}
	class={classes(restProps, "navds-stepper")}
	class:navds-stepper--horizontal={orientation === "horizontal"}
>
	{@render children()}
</ol>
