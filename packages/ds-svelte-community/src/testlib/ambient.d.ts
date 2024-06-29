import type { ReactNode } from "react";
import type { DiffOptions, ReactComponent } from "./htmldiff";

interface CustomMatchers {
	/**
	 * toMimicReact matches a Svelte component to a React component.
	 * It ignores comments and empty (after trimming) text nodes.
	 */
	toMimicReact(
		comp: ReactComponent,
		opts?: {
			opts?: DiffOptions;
			props?: object;
			children?: ReactNode[];
		},
	): void;
}

declare module "bun:test" {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface Matchers<T> extends CustomMatchers {}
	interface AsymmetricMatchers extends CustomMatchers {}
}
