import type { PopoverProps } from "../Popover/type";

export interface HelpTextProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		Pick<PopoverProps, "strategy" | "placement"> {
	/**
	 * Adds a title-tooltip with the given text
	 */
	title: string;
	/**
	 * Adds a class to the wrapper element
	 */
	wrapperClass?: string;
}
