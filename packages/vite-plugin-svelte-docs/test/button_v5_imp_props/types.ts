import { Snippet } from "svelte";

export type Props = {
	/**
	 * Select some type
	 */
	type?: "button" | "submit" | "reset";
	/**
	 * Color
	 */
	color: string;
	onClick?: (e: MouseEvent) => void;
	/**
	 * Default slot
	 */
	children: Snippet;
	named?: Snippet<[string]>;
};
