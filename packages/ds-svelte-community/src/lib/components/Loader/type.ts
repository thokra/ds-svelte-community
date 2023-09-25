import type { SVGAttributes } from "svelte/elements";

export const sizes = [
	"3xlarge",
	"2xlarge",
	"xlarge",
	"large",
	"medium",
	"small",
	"xsmall",
] as const;

export const variants = ["neutral", "interaction", "inverted"] as const;

export interface Props extends SVGAttributes<SVGElement> {
	size?: (typeof sizes)[number];
	variant?: (typeof variants)[number];
	title?: string;
	transparent?: boolean;
}
