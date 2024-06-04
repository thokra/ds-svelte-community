import type { Snippet } from "svelte";

export const sizes = ["xsmall", "small", "medium"] as const;
export const variants = ["action", "neutral"] as const;

export interface Props {
	size?: (typeof sizes)[number];
	variant?: (typeof variants)[number];

	/**
	 * Text to copy to clipboard.
	 */
	copyText: string;

	/**
	 *  Optional text in button.
	 */
	text?: string;

	/**
	 * Text shown when button is clicked.
	 * Only set if used with 'text'-prop.
	 */
	activeText?: string;

	/**
	 * Timeout duration in milliseconds.
	 */
	activeDuration?: number;

	/**
	 * Accessible label for icon (ignored if text is set).
	 */
	title?: string;

	/**
	 * Accessible label for icon in active-state (ignored if text is set).
	 */
	activeTitle?: string;

	/**
	 *  Called whenever the active-state changes
	 */
	activeChanged?: (active: boolean) => void;

	/**
	 * Use custom icons. The snippet receives the active-state as argument.
	 * Should only return a single icon.
	 */
	icon?: Snippet<[boolean]>;

	[key: string]: unknown;
}
