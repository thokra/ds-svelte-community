import { getContext } from "svelte";
import type { HTMLFieldsetAttributes } from "svelte/elements";

export const sizes = ["small", "medium"] as const;

export type FieldSetContext = {
	/**
	 * Error message applied to element,
	 */
	error: string;
	/**
	 * Overrides internal errorId
	 */
	errorId: string;
	/**
	 * Changes paddings, margins and font-sizes
	 */
	size: (typeof sizes)[number];
	/**
	 * Sets fieldset and all form-children to disabled
	 */
	disabled: boolean;
};

export const contextKey = Symbol("FieldsetContext");

export function GetFieldsetContext(): FieldSetContext | undefined {
	return getContext<FieldSetContext>(contextKey);
}

export interface FieldsetProps extends HTMLFieldsetAttributes {
	/**
	 * If enabled shows the legend and description for screenreaders only
	 */
	hideLegend?: boolean;

	/**
	 * Toggles error propagation to child-elements
	 * @default true
	 */
	// errorPropagation : boolean;

	/**
	 * Error message for element
	 */
	error?: string;

	/**
	 * Override internal errorId
	 */
	errorId?: string;

	/**
	 * Changes font-size, padding and gaps
	 */
	size?: (typeof sizes)[number];
	/**
	 * Disables element
	 * @note Avoid using if possible for accessibility purposes
	 */
	disabled?: boolean;

	/**
	 * Override internal id
	 */
	id?: string;
}
