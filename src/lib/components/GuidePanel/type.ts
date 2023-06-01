import type { HTMLAttributes } from "svelte/elements";

export const sizes = ["small", "medium"] as const;

export interface Props extends HTMLAttributes<HTMLDivElement> {
	poster?: boolean;
}

export interface GuideProps extends HTMLAttributes<HTMLDivElement> {
	size?: (typeof sizes)[number];
}
