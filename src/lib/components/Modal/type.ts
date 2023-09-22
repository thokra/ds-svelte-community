import type { HTMLDialogAttributes } from "svelte/elements";

export const sizes = ["small", "medium"] as const;

export interface Props extends HTMLDialogAttributes {
	open: boolean;
	isModal?: boolean;
	closeButton?: boolean;
	width?: (typeof sizes)[number] | number | `${number}${string}`;
	closeIconText?: string;
}
