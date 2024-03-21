import bgColors from "@navikt/ds-tokens/src/colors-bg.json";
import type { HTMLAttributes, SvelteHTMLElements } from "svelte/elements";
export const widths = ["text", "md", "lg", "xl", "2xl"] as const;

export interface PageProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Overrides html-tag
	 * @default "div"
	 */
	as?: "div" | "body";
	/**
	 * Background color. Accepts a color token.
	 * @default bg-default
	 */
	background?: keyof typeof bgColors.a | "surface-subtle";
	/**
	 * Places footer below page-fold
	 */
	footerPosition?: "belowFold";
	/**
	 * Adds a standardised padding of 4rem between content and footer
	 * @default end
	 */
	contentBlockPadding?: "end" | "none";
}

export interface PageBlockProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Predefined max-width
	 * @example
	 * text: 576px + dynamic gutters
	 * md:   768px
	 * lg:   1024px
	 * xl:   1280px
	 * 2xl:  1440px
	 * @default max-width: 100%;
	 */
	width?: (typeof widths)[number];
	/**
	 * Adds a standardised responsive padding-inline
	 * @example
	 * 3rem on > md
	 * 1rem on < md
	 * @default false
	 */
	gutters?: boolean;

	as?: keyof SvelteHTMLElements;
}
