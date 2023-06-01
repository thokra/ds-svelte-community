import { getContext } from "svelte";
import type { HTMLAnchorAttributes, HTMLOlAttributes } from "svelte/elements";
import type { Readable } from "svelte/store";

export const orientations = ["horizontal", "vertical"] as const;

export type StepperContext = {
	activeStep: Readable<number>;
	orientation: (typeof orientations)[number];
	interactive: Readable<boolean>;

	steps: Readable<HTMLElement[]>;
	register: (el: HTMLElement) => void;
	unregister: (el: HTMLElement) => void;
	setStep: (step: number, event: MouseEvent) => void;
};

export const contextKey = Symbol("StepperContext");
export const getStepperContext = (): StepperContext => {
	const context = getContext<StepperContext>(contextKey);
	if (!context) {
		throw new Error("Element must be child of Stepper");
	}
	return context;
};

export interface Props extends HTMLOlAttributes {
	activeStep?: number;
	orientation?: (typeof orientations)[number];
	interactive?: boolean;
}

export interface StepProps extends HTMLAnchorAttributes {
	completed?: boolean;
	interactive?: boolean;
}
