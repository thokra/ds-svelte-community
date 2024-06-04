import type { Snippet } from "svelte";

export const sizes = ["medium", "small"] as const;
export const variants = ["action", "neutral"] as const;

export interface Props {
	size?: (typeof sizes)[number];

	/**
	 * List of chips. Wrapp `RemovableChip` and `ToggleChip` with `<li>`
	 */
	children: Snippet;

	[key: string]: unknown;
}

export interface ToggleProps {
	/**
	 * Toggles aria-pressed and visual-changes
	 */
	selected?: boolean;

	/**
	 * The content of the chip
	 */
	value: string;

	/**
	 * Chip-variants
	 */
	variant?: (typeof variants)[number];

	/**
	 * Toggles display of checkmark on selected
	 */
	checkmark?: boolean;

	/**
	 * Custom content, will use `value` if not provided
	 */
	children?: Snippet;

	[key: string]: unknown;
}

export interface RemovableProps {
	/**
	 * Chip-variants
	 */
	variant?: (typeof variants)[number];

	/**
	 * Replaces label read for screen-readers
	 */
	removeLabel?: string;

	/**
	 * The content of the chip
	 */
	value: string;

	/**
	 * Custom content, will use `value` if not provided
	 */
	children?: Snippet;

	/**
	 * Called when the user clicks the remove button
	 */
	ondelete?: () => void;

	[key: string]: unknown;
}
