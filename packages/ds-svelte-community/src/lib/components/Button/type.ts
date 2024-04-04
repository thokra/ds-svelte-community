import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

export const variants = [
	"primary",
	"primary-neutral",
	"secondary",
	"secondary-neutral",
	"tertiary",
	"tertiary-neutral",
	"danger",
] as const;

export const sizes = ["medium", "small", "xsmall"] as const;

interface BaseProps {
	/**
	 * Replaces button content with a Loader component, keeps width.
	 */
	loading?: boolean;

	/**
	 * **Avoid using if possible for accessibility purposes.**
	 *
	 * Prevent the user from interacting with the button: it cannot be pressed or focused.
	 */
	disabled?: boolean | undefined | null;

	/**
	 * Changes padding, height, and font-size.
	 */
	size?: (typeof sizes)[number];

	/**
	 * Changes design and interaction-visuals.
	 */
	variant?: (typeof variants)[number];

	/**
	 * Content of the button
	 */
	children?: Snippet;

	/**
	 * Place icon to the left of the content
	 */
	iconLeft?: Snippet;

	/**
	 * Place icon to the right of the content
	 */
	iconRight?: Snippet;

	/**
	 * Click handler
	 */
	onClick?: (event: MouseEvent) => void;

	/**
	 * Focus handler
	 */
	onFocus?: (event: FocusEvent) => void;

	/**
	 * Blur handler
	 */
	onBlur?: (event: FocusEvent) => void;

	/**
	 * Mouse enter handler
	 */
	onMouseEnter?: (event: MouseEvent) => void;

	/**
	 * Mouse leave handler
	 */
	onMouseLeave?: (event: MouseEvent) => void;

	/**
	 * Reference
	 */
	ref?: null | HTMLButtonElement | HTMLAnchorElement;
}

interface ButtonProps extends BaseProps, HTMLButtonAttributes {
	as?: "button";
}
interface AnchorProps extends BaseProps, HTMLAnchorAttributes {
	as: "a";
}

export type Props = ButtonProps | AnchorProps;
