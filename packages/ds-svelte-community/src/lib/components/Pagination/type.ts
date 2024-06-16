export const sizes = ["medium", "small", "xsmall"] as const;

export interface Props {
	/**
	 * Changes padding, height and font-size.
	 */
	size?: (typeof sizes)[number];

	/**
	 * Current page. If set will require implementation of `on:change` event.
	 * @note Pagination indexing starts at 1.
	 */
	page?: number;
	/**
	 * Number of always visible pages before and after the current page.
	 * @default 1
	 */
	siblingCount?: number;
	/**
	 * Number of always visible pages at the beginning and end.
	 * @default 1
	 */
	boundaryCount?: number;

	/**
	 * Total number of pages.
	 */
	count: number;
	/**
	 * Next label.
	 */
	nextText?: string;
	/**
	 * Previous label.
	 */
	prevText?: string;

	/**
	 * Show next and previous buttons with text.
	 */
	prevNextTexts?: boolean;

	onChange?: (_: { page: number }) => void;

	[key: string]: unknown;
}
