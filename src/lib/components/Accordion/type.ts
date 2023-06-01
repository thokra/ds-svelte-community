import type { HTMLAttributes } from "svelte/elements";

export const variants = ["default", "neutral"] as const;

export const sizes = ["large", "medium", "small"] as const;

export const headingSizes = ["large", "medium", "small", "xsmall"] as const;

export interface Props extends HTMLAttributes<HTMLDivElement> {
	variant?: (typeof variants)[number];
	size?: (typeof sizes)[number];
	headingSize?: (typeof headingSizes)[number];
}

export interface ItemProps extends HTMLAttributes<HTMLDivElement> {
	open?: boolean;
	heading?: string;
}

export type AccordionContext = {
	variant: Props["variant"];
	headingSize: Props["headingSize"];
	size: Props["size"];
};
