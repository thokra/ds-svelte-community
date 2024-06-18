import type { Snippet } from "svelte";

export interface Props {
	/**
	 * If enabled shows the label and description for screenreaders only.
	 */
	hideLabel?: boolean;
	/**
	 * Toggles loading state with loader-component on switch.
	 */
	loading?: boolean;
	/**
	 * Positions switch on left/right side of label.
	 * @default "left"
	 */
	position?: "left" | "right";
	/**
	 * Adds a description to extend labling of Switch.
	 */
	description?: string;
	/**
	 * Changes font-size, padding and gaps.
	 */
	size?: "medium" | "small";
	/**
	 * Disables element.
	 * @note Avoid using if possible for accessibility purposes.
	 */
	disabled?: boolean;
	/**
	 * Checked state.
	 */
	checked?: boolean;
	/**
	 * Deactivate label.
	 */
	deactivateLabel?: string;

	/**
	 * Label for switch.
	 */
	children: Snippet;

	[key: string]: unknown;
}
