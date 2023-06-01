import { getContext } from "svelte";
import type { Readable } from "svelte/store";

export const sizes = ["small", "medium"] as const;
export const iconPositions = ["left", "top"] as const;

export type TabContext = {
	value: Readable<string>;
	loop: boolean;
	iconPosition: (typeof iconPositions)[number];
	size: (typeof sizes)[number];
	selectionFollowsFocus: boolean;
	tabs: HTMLElement[];
	activeTab: Readable<HTMLElement>;
	activate: (value: string) => void;
	register: (el: HTMLElement, value: string) => void;
	focusOn: (el: HTMLElement) => void;
	blur: (el: HTMLElement) => void;
};

export const contextKey = Symbol("tab-context");

export function getTabsContext(): TabContext {
	const context = getContext<TabContext>(contextKey);
	if (!context) {
		throw new Error("No context found");
	}
	return context;
}

import type { HTMLAttributes, HTMLButtonAttributes } from "svelte/elements";

export interface TabProps extends HTMLButtonAttributes {
	value: string;
}

export type TabListProps = HTMLAttributes<HTMLDivElement>;

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
	value: string;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
	size?: (typeof sizes)[number];
	value: string;
	loop?: boolean;
	iconPosition?: (typeof iconPositions)[number];
	selectionFollowsFocus?: boolean;
}
