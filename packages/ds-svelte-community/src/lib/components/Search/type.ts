import type { Snippet } from "svelte";

export const sizes = ["medium", "small"] as const;
export const variants = ["primary", "secondary", "simple"] as const;

export interface Props {
	/**
	 * Search label.
	 * @note Will be hidden by default, is required for accessibility reasons.
	 */
	label: string;

	/**
	 * Shows label and description for screen readers only.
	 */
	hideLabel?: boolean;

	/**
	 * aria-label on clear button.
	 */
	clearButtonLabel?: string;
	/**
	 * If false, removes clear-button option from input.
	 */
	clearButton?: boolean;
	/**
	 * Changes button-variant, "simple" removes button
	 */
	variant?: (typeof variants)[number];
	/**
	 * Adds a description to extend labling of a field.
	 */
	description?: string;
	/**
	 * Size of input.
	 */
	size?: (typeof sizes)[number];
	/**
	 * Value of input.
	 */
	value?: string;
	/**
	 * Disables element
	 * @note Avoid using if possible for accessibility purposes
	 */
	disabled?: boolean;
	/**
	 * Loading state.
	 * @note Non-standard. Only available in ds-svelte-community.
	 */
	loading?: boolean;
	/**
	 * Aria label on search icon.
	 */
	searchIconText?: string;

	/**
	 * Event when the input is cleared
	 */
	onClear?: (
		_: { event: MouseEvent; trigger: "Click" } | { event: KeyboardEvent; trigger: "Escape" },
	) => void;

	/**
	 * Custom button
	 */
	button?: Snippet;

	[key: string]: unknown;
}
