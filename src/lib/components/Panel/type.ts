import type { HTMLAttributes, SvelteHTMLElements } from "svelte/elements";

export interface Props extends HTMLAttributes<HTMLElement> {
	border?: boolean;
	as?: keyof SvelteHTMLElements;
}
