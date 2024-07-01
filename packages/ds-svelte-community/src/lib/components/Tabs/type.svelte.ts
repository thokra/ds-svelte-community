import { getContext, type Snippet } from "svelte";
import newUniqueId from "../local-unique-id";

export const sizes = ["small", "medium"] as const;
export const iconPositions = ["left", "top"] as const;
export const ases = ["button", "a"] as const;

export class TabContext {
	value: string = $state("");
	loop: boolean = $state(false);
	iconPosition: (typeof iconPositions)[number] = $state("left");
	size: (typeof sizes)[number] = $state("medium");
	selectionFollowsFocus: boolean = $state(false);
	tabs: HTMLElement[] = $state([]);
	tabIndex: Record<string, HTMLElement> = $state({});
	activeTab?: HTMLElement = $state();
	baseID: string = newUniqueId();

	constructor(value: string) {
		this.value = value;
	}
	activate(value: string) {
		this.value = value;
	}
	register(el: HTMLElement, value: string) {
		if (this.value === value) {
			this.activeTab = el;
		}
		this.tabs.push(el);
		this.tabIndex[value] = el;
	}
	focusOn(el: HTMLElement) {
		this.activeTab = el;
	}
	blur(el: HTMLElement) {
		if (this.activeTab === el) {
			this.activeTab = this.tabIndex[this.value];
		}
	}
	idFor(typ: "panel" | "tab", val: string) {
		return `tabs-${typ}-${this.baseID}-${val}`;
	}
}

export const contextKey = Symbol("tab-context");

export function getTabsContext(): TabContext {
	const context = getContext<TabContext>(contextKey);
	if (!context) {
		throw new Error("No context found");
	}
	return context;
}

export interface TabProps {
	/**
	 * Value of the tab.
	 */
	value: string;
	/**
	 * Label of the tab.
	 */
	children?: Snippet;
	/**
	 * Icon to display in the tab.
	 */
	icon?: Snippet;
	/**
	 * Element to render as.
	 */
	as?: (typeof ases)[number];

	[key: string]: unknown;
}

export interface TabListProps {
	/**
	 * Tab list items.
	 */
	children: Snippet;

	[key: string]: unknown;
}

export interface TabPanelProps {
	/**
	 * Value of the tab.
	 */
	value: string;
	/**
	 * Content of the tab panel.
	 */
	children: Snippet;

	[key: string]: unknown;
}

export interface TabsProps {
	/**
	 * Changes padding and font-size.
	 */
	size?: (typeof sizes)[number];
	/**
	 * Controlled selected value.
	 */
	value: string;
	/**
	 * Loops back to start when navigating past last item.
	 */
	loop?: boolean;
	/**
	 * Icon position in Tab.
	 */
	iconPosition?: (typeof iconPositions)[number];
	/**
	 * Automatically activates tab on focus/navigation.
	 */
	selectionFollowsFocus?: boolean;
	/**
	 * `TabList` and `TabPanel` components.
	 */
	children: Snippet;

	[key: string]: unknown;
}
