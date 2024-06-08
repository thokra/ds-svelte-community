import type { Snippet } from "svelte";

export const sizes = ["small", "medium"] as const;

export interface Props {
	/**
	 * Set open to `true` to open the dialog. Set to `false` to close it.
	 * Recommended to use with `bind:open`.
	 */
	open: boolean;

	/**
	 * Set to `true` to make the dialog modal.
	 */
	isModal?: boolean;
	/**
	 * Removes close-button(X) when false.
	 */
	closeButton?: boolean;
	/**
	 * Set width of dialog. By default will fit content ut to 700px.
	 */
	width?: (typeof sizes)[number] | number | `${number}${string}`;
	/**
	 * Text for close-icon.
	 */
	closeIconText?: string;

	/**
	 * Header content.
	 */
	header?: Snippet | string;

	/**
	 * Body content.
	 */
	children: Snippet;

	/**
	 * Footer content.
	 */
	footer?: Snippet;

	[key: string]: unknown;
}
