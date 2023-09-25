<script lang="ts">
	import { createEventDispatcher, setContext } from "svelte";
	import { writable } from "svelte/store";
	import { classes } from "../helpers";
	import { contextKey, type Props, type StepperContext, type orientations } from "./type";

	type $$Props = Props;

	/**
	 * The direction the component grows.
	 */
	export let orientation: (typeof orientations)[number] = "vertical";
	/**
	 * Current active step.
	 * @note Stepper index starts at 1, not 0
	 */
	export let activeStep = 1;
	/**
	 * Makes stepper non-interactive if false
	 */
	export let interactive = true;

	const dispatch = createEventDispatcher<{ change: { event: MouseEvent; index: number } }>();

	const active = writable<number>(activeStep);
	$: active.set(activeStep);
	const interactiveStore = writable<boolean>(interactive);
	$: interactiveStore.set(interactive);

	let steps = writable<string[]>([]);
	const context: StepperContext = {
		activeStep: active,
		orientation,
		interactive: interactiveStore,
		steps,
		register: (el: string) => {
			steps.update((steps) => [...steps, el]);
			return $steps.length;
		},
		unregister: (el: string) => {
			steps.update((steps) => steps.filter((step) => step !== el));
		},
		setStep: (step, event) => {
			dispatch("change", { event, index: step });
		},
	};

	setContext<StepperContext>(contextKey, context);
</script>

<ol
	{...$$restProps}
	class={classes($$restProps, "navds-stepper")}
	class:navds-stepper--horizontal={orientation === "horizontal"}
>
	<!-- List of `<Step />` -->
	<slot />
</ol>
