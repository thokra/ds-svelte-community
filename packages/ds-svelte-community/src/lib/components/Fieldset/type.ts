import { type Snippet } from "svelte";

export const sizes = ["small", "medium"] as const;

export interface FieldsetProps {
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

	legend: string | Snippet;

	children: Snippet;

	description?: string | Snippet;

	[key: string]: unknown;
}
