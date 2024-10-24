import type { Snippet } from "svelte";

export type ErrorMessageProps = {
	/**
	 * The size of the body
	 * medium: 18px, small: 16px
	 */
	size?: "medium" | "small";
	/** Adds margin-bottom */
	spacing?: boolean;
	/** Tag to use for the body */
	as?: "p" | "span";

	children: Snippet;
	[key: string]: unknown;
};
