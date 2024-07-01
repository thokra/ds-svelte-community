import type { Snippet } from "svelte";

export const placements = ["top", "right", "bottom", "left"] as const;

export interface TooltipProps {
	/**
	 * Open state for tooltip.
	 */
	open?: boolean;

	/**
	 * Orientation for tooltip.
	 */
	placement?: (typeof placements)[number];
	/**
	 * Toggles rendering of arrow.
	 */
	arrow?: boolean;
	/**
	 * Distance from anchor to tooltip.
	 */
	offset?: number;
	/**
	 * Text-content inside tooltip.
	 */
	content: string;
	/**
	 * Sets max allowed character length.
	 */
	maxChar?: number;
	/**
	 * Adds a delay in milliseconds before opening tooltip.
	 */
	delay?: number;
	/**
	 * List of Keyboard-keys for shortcuts.
	 */
	keys?: string[];

	/**
	 * Content to which the tooltip will activate.
	 */
	children: Snippet;

	[key: string]: unknown;
}
