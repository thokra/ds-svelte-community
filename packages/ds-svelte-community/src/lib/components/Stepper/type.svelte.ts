import { getContext, type Snippet } from "svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";

export const orientations = ["horizontal", "vertical"] as const;

export class StepperContext {
	activeStep: number = $state(1);
	orientation: (typeof orientations)[number] = $state("horizontal");
	interactive: boolean = $state(true);
	onchange?: (step: number, event: MouseEvent) => void;
	steps = $state<string[]>([]);

	constructor(
		activeStep: number,
		orientation: (typeof orientations)[number],
		interactive: boolean,
		onchange?: (step: number, event: MouseEvent) => void,
	) {
		this.activeStep = activeStep;
		this.orientation = orientation;
		this.interactive = interactive;
		this.onchange = onchange;
	}

	register = (el: string) => {
		this.steps.push(el);
		return this.steps.length;
	};
	unregister = (el: string) => {
		const index = this.steps.indexOf(el);
		if (index > -1) {
			this.steps.splice(index, 1);
		}
	};
	setStep = (step: number, event: MouseEvent) => {
		if (this.onchange) {
			this.onchange(step, event);
		}
	};
}

export const contextKey = Symbol("StepperContext");
export const getStepperContext = (): StepperContext => {
	const context = getContext<StepperContext>(contextKey);
	if (!context) {
		throw new Error("Element must be child of Stepper");
	}
	return context;
};

export interface Props {
	/**
	 * Current active step.
	 * @note Stepper index starts at 1, not 0
	 */
	activeStep?: number;
	/**
	 * The direction the component grows.
	 */
	orientation?: (typeof orientations)[number];
	/**
	 * Makes stepper non-interactive if false
	 */
	interactive?: boolean;

	/**
	 * List of `<Step />`
	 */
	children: Snippet;

	onchange?: (step: number, event: MouseEvent) => void;

	[key: string]: unknown;
}

export interface StepProps extends HTMLAnchorAttributes {
	/**
	 * Makes step-indicator a checkmark
	 */
	completed?: boolean;
	/**
	 * Makes step non-interactive if false. Step will be set to a <div>, overriding `as`-prop
	 */
	interactive?: boolean;
	completedLabel?: string;

	children: Snippet;

	[key: string]: unknown;
}
