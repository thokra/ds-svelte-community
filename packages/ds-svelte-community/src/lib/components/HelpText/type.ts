import type { Snippet } from "svelte";
import type { PopoverProps } from "../Popover/type";

export interface HelpTextProps extends Pick<PopoverProps, "strategy" | "placement"> {
	/**
	 * Adds a title-tooltip with the given text
	 */
	title: string;
	/**
	 * Adds a class to the wrapper element
	 */
	wrapperClass?: string;

	/**
	 * Help content
	 */
	children: Snippet;

	[key: string]: unknown;
}
