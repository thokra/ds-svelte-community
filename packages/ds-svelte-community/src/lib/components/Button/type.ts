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
	 * @default false
	 */
	loading?: boolean;
	/**
	 * @default false
	 */
	disabled?: boolean | undefined | null;
	/**
	 * @default false
	 */
	iconOnly?: boolean;
	/**
	 * @default "medium"
	 */
	size?: (typeof sizes)[number];
	/**
	 * @default "primary"
	 */
	variant?: (typeof variants)[number];

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
