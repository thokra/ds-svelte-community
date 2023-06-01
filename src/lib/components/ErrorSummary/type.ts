import type { HTMLAttributes } from "svelte/elements";

export const sizes = ["medium", "small"] as const;
export const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

export interface Props extends HTMLAttributes<HTMLHeadingElement> {
	size?: (typeof sizes)[number];
	heading: string;
	headingTag?: (typeof headingTags)[number];
}
