import type { Snippet } from "svelte";
import type { ChangeEventHandler } from "svelte/elements";

export const sizes = ["medium", "small"] as const;

export interface Props {
	/**
	 * Controlled state for checkboxes.
	 */
	value?: unknown[];

	/**
	 * Changes font-size, padding and gaps.
	 */
	size?: (typeof sizes)[number];

	/**
	 * Disables element @note Avoid using if possible for accessibility purposes.
	 */
	disabled?: boolean;

	/**
	 * If enabled shows the legend and description for screen readers only.
	 */
	hideLegend?: boolean;

	/**
	 * Error message for element.
	 */
	error?: string;

	/**
	 * Override internal errorId.
	 */
	errorId?: string;

	/**
	 * Override internal id.
	 */
	id?: string;

	/**
	 * Legend of the fieldset.
	 */
	legend: string | Snippet;

	/**
	 * Description of the fieldset.
	 */
	description?: string | Snippet;

	/**
	 * List of checkboxes
	 */
	children: Snippet;

	[key: string]: unknown;
}

export class CheckboxGroupContext {
	values: unknown[] = $state([]);
	groupControlled: boolean | undefined = $state(undefined);
	hasError = $state(false);
	size: (typeof sizes)[number] = $state("medium");
	// change: (value: unknown) => void;
	// groupControlled: boolean;
	// values: Readable<unknown[]>;
	// hasError: Readable<boolean>;
	// size: (typeof sizes)[number];

	onchange(value: unknown) {
		if (!this.groupControlled) {
			return;
		}

		if (this.values.includes(value)) {
			this.values.splice(this.values.indexOf(value), 1);
		} else {
			this.values.push(value);
		}
	}
}

export interface CheckboxProps {
	/**
	 * The value of the HTML element.
	 */
	value?: string;

	/**
	 * Adds error indication on checkbox
	 */
	error?: boolean;

	/**
	 * Adds error indication on checkbox
	 */
	hideLabel?: boolean;

	/**
	 * Specify whether the Checkbox is in an indeterminate state
	 *
	 * **Note**: This is a client side only feature
	 */
	indeterminate?: boolean;

	/**
	 * Adds a description to extend labeling of Checkbox
	 */
	description?: string;

	/**
	 * Changes font-size, padding and gaps
	 */
	size?: (typeof sizes)[number];

	/**
	 * Disables element @note Avoid using if possible for accessibility purposes
	 */
	disabled?: boolean;

	/**
	 * Override internal id
	 */
	id?: string;

	/**
	 * Controlled state for checkboxes.
	 */
	checked?: boolean;

	/**
	 * Label text
	 */
	children?: Snippet;

	/**
	 * onchange event
	 */
	onchange?: ChangeEventHandler<HTMLInputElement>;

	[key: string]: unknown;
}
