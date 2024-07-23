import type { Snippet } from "svelte";

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

export interface BaseProps {
	/**
	 * Replaces button content with a Loader component, keeps width.
	 */
	loading?: boolean;

	/**
	 * **Avoid using if possible for accessibility purposes.**
	 *
	 * Prevent the user from interacting with the button: it cannot be pressed or focused.
	 */
	disabled?: boolean;

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
	 * Ref is the button element. Bind to this to obtain the button element.
	 */
	ref?: Element;

	[key: string]: unknown;
}

interface ButtonProps extends BaseProps {
	as?: "button";
}
interface AnchorProps extends BaseProps {
	/**
	 * Element to render
	 */
	as: "a";
	/**
	 * URL to navigate to. Required when `as` is set to `"a"`.
	 */
	href: string;
}

export type Props = ButtonProps | AnchorProps;
