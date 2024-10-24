import type { Snippet } from "svelte";

export type HeadingProps = {
	/** Heading level */
	level?: "1" | "2" | "3" | "4" | "5" | "6";
	/** Heading size */
	size?: "xlarge" | "large" | "medium" | "small" | "xsmall";
	/** Adds margin-bottom */
	spacing?: boolean;
	/** Tag to use for the heading */
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | undefined;

	children: Snippet;
	[key: string]: unknown;
};
