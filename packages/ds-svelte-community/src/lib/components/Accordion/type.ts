import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export const variants = ["default", "neutral"] as const;

export const sizes = ["large", "medium", "small"] as const;

export const headingSizes = ["large", "medium", "small", "xsmall"] as const;

export interface Props extends HTMLAttributes<HTMLDivElement> {
	/**
	 * The variant of the accordion.
	 */
	variant?: (typeof variants)[number];

	/**
	 * The size of the accordion.
	 */
	size?: (typeof sizes)[number];

	/**
	 * The size of the accordion heading.
	 */
	headingSize?: (typeof headingSizes)[number];

	/**
	 * Whether to indent content or not
	 */
	indent?: boolean;

	/**
	 * List of AccordionItem components.
	 */
	children: Snippet;
}

export interface ItemProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Whether the accordion item is open or not.
	 */
	open?: boolean;

	/**
	 * Heading of the accordion item.
	 */
	heading?: string | Snippet;

	/**
	 * Aria text
	 */
	showMoreText?: string;

	/**
	 * Content
	 */
	children: Snippet;
}

export type AccordionContext = {
	variant: Props["variant"];
	headingSize: Props["headingSize"];
	size: Props["size"];
};
