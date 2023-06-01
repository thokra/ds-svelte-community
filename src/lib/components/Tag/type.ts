import type { HTMLAnchorAttributes, HTMLAttributes, SvelteHTMLElements } from "svelte/elements";

export const variants = [
	"warning",
	"warning-filled",
	"error",
	"error-filled",
	"info",
	"info-filled",
	"success",
	"success-filled",
	"neutral",
	"neutral-filled",
	"alt1",
	"alt1-filled",
	"alt2",
	"alt2-filled",
	"alt3",
	"alt3-filled",
] as const;

export const sizes = ["medium", "small", "xsmall"] as const;

export interface BaseProps {
	variant?: (typeof variants)[number];
	size?: (typeof sizes)[number];
}

export interface GeneralProps extends BaseProps, HTMLAttributes<HTMLElement> {
	as?: keyof SvelteHTMLElements;
}

export interface AProps extends BaseProps, HTMLAnchorAttributes {
	as: "a";
}

export type Props = GeneralProps | AProps;
