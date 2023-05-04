<script lang="ts" context="module">
	import { getContext } from "svelte";

	export type StepperContext = {
		activeStep: Readable<number>;
		orientation: "horizontal" | "vertical";
		interactive: boolean;

		steps: Readable<HTMLElement[]>;
		register: (el: HTMLElement) => void;
		unregister: (el: HTMLElement) => void;
		setStep: (step: number, event: MouseEvent) => void;
	};

	const contextKey = Symbol("StepperContext");
	export const getStepperContext = (): StepperContext => {
		const context = getContext<StepperContext>(contextKey);
		if (!context) {
			throw new Error("Element must be child of Stepper");
		}
		return context;
	};
</script>

<script lang="ts">
	import { classes } from "../helpers";
	import { setContext, createEventDispatcher } from "svelte";
	import { writable, type Readable } from "svelte/store";

	/**
	 * The direction the component grows.
	 */
	export let orientation: StepperContext["orientation"] = "vertical";
	/**
	 * Current active step.
	 * @note Stepper index starts at 1, not 0
	 */
	export let activeStep = 1;
	/**
	 * Callback for next activeStep
	 * @note Stepper index starts at 1, not 0
	 */
	// onStepChange?: (step: number) => void;

	/**
	 * Makes stepper non-interactive if false
	 * @default true
	 */
	export let interactive = true;

	const dispatch = createEventDispatcher<{ change: { event: MouseEvent; index: number } }>();

	const active = writable<number>(activeStep);
	$: active.set(activeStep);

	let steps = writable<HTMLElement[]>([]);
	const context: StepperContext = {
		activeStep: active,
		orientation,
		interactive,
		steps,
		register: (el: HTMLElement) => {
			steps.update((steps) => [...steps, el]);
		},
		unregister: (el: HTMLElement) => {
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
	<slot />
</ol>
