import type { Snippet } from "svelte";

export const PopoverPlacement = [
	"top",
	"bottom",
	"right",
	"left",
	"top-start",
	"top-end",
	"bottom-start",
	"bottom-end",
	"right-start",
	"right-end",
	"left-start",
	"left-end",
] as const;

export interface PopoverProps {
	/**
	 * Element popover anchors to
	 */
	anchorEl: Element | undefined;
	/**
	 * Open state
	 */
	open: boolean;
	/**
	 * Orientation for popover
	 * @note Try to keep general usage to "top", "bottom", "left", "right"
	 * @default "top"
	 */
	placement?: (typeof PopoverPlacement)[number];
	/**
	 * Adds a arrow from dialog to anchor when true
	 * @default true
	 */
	arrow?: boolean;
	/**
	 * Distance from anchor to popover
	 * @default 16 w/arrow, 4 w/no-arrow
	 */
	offset?: number;
	/**
	 * Changes what CSS position property to use
	 * You want to use "fixed" if reference element is inside a fixed container, but popover is not
	 * @default "absolute"
	 */
	strategy?: "absolute" | "fixed";
	/**
	 * Changes placement of the floating element in order to keep it in view.
	 * @default true
	 */
	flip?: boolean;

	/**
	 * Class to add to the popover content
	 */
	contentClass?: string;

	/**
	 * Content
	 */
	children: Snippet;

	[key: string]: unknown;
}
