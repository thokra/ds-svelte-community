import type { HTMLAnchorAttributes, HTMLAttributes, SvelteHTMLElements } from "svelte/elements";

export interface BaseProps {
	border?: boolean;
}

export interface GeneralProps extends BaseProps, HTMLAttributes<HTMLElement> {
	border?: boolean;
	as?: keyof SvelteHTMLElements;
}

export interface AProps extends BaseProps, HTMLAnchorAttributes {
	border?: boolean;
	as: "a";
}

export type Props = GeneralProps | AProps;
