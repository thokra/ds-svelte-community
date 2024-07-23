import type { ReactNode } from "react";
import "vitest";
import type { DiffOptions, ReactComponent } from "./htmldiff";

interface CustomMatchers<R = unknown> {
	/**
	 * toMimicReact matches a Svelte component to a React component.
	 * It ignores comments and empty (after trimming) text nodes.
	 */
	toMimicReact: (
		comp: ReactComponent,
		opts?: {
			opts?: DiffOptions;
			props?: object;
			children?: ReactNode[];
		},
	) => R;
}

declare module "bun:test" {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface Matchers<T> extends CustomMatchers {}
	interface AsymmetricMatchers extends CustomMatchers {}
}

declare module "vitest" {
	interface Assertion<T = unknown> extends CustomMatchers<T> {}
	interface AsymmetricMatchersContaining extends CustomMatchers {}
}
