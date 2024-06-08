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

export interface Props {
	/**
	 * Changes Loader width/height
	 * 64px | 40px | 32px | 24px | 20px | 16px
	 */
	size?: (typeof sizes)[number];
	/**
	 * Colored variants for Loader
	 */
	variant?: (typeof variants)[number];
	/**
	 * Title prop on svg
	 */
	title?: string;
	/**
	 * Sets svg-background to transparent
	 */
	transparent?: boolean;

	[key: string]: unknown;
}
