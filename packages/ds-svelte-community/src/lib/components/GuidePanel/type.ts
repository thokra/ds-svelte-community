import type { Snippet } from "svelte";

export const sizes = ["small", "medium"] as const;

export interface Props {
	/**
	 * Render illustation above content. Will be true on mobile (< 480px) if not set.
	 */
	poster?: boolean;

	/**
	 * Custom illustration
	 */
	illustration?: Snippet;

	/**
	 * Content
	 */
	children: Snippet;
}

export interface GuideProps {
	size?: (typeof sizes)[number];
}
