import type { HTMLAnchorAttributes, SvelteHTMLElements } from "svelte/elements";

export interface Props extends HTMLAnchorAttributes {
	as?: keyof SvelteHTMLElements;
	href: string;
	border?: boolean;
}
