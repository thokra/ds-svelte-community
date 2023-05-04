<script lang="ts" context="module">
	import { writable, type Readable } from "svelte/store";

	export type TabContext = {
		value: Readable<string>;
		loop: boolean;
		iconPosition: "left" | "top";
		size: "medium" | "small";
		selectionFollowsFocus: boolean;
		tabs: HTMLElement[];
		activeTab: Readable<HTMLElement>;
		activate: (value: string) => void;
		register: (el: HTMLElement, value: string) => void;
		focusOn: (el: HTMLElement) => void;
		blur: (el: HTMLElement) => void;
	};

	export const contextKey = "tab";
</script>

<script lang="ts">
	import { setContext } from "svelte";
	import { classes } from "../helpers";

	/**
	 * Changes padding and font-size
	 */
	export let size: TabContext["size"] = "medium";

	/**
	 * Controlled selected value
	 */
	export let value: string;

	/**
	 * Automatically activates tab on focus/navigation
	 * @default false
	 */
	export let selectionFollowsFocus = false;
	/**
	 * Loops back to start when navigating past last item
	 * @default false
	 */
	export let loop = false;
	/**
	 * Icon position in Tab
	 * @default "left"
	 */
	export let iconPosition: TabContext["iconPosition"] = "left";

	const activeValue = writable<string>(value);
	$: activeValue.set(value);
	$: value = $activeValue;

	const activeTab = writable<HTMLElement>(undefined);

	let tabs: HTMLElement[] = [];
	let tabIndex: { [key: string]: HTMLElement } = {};

	setContext<TabContext>(contextKey, {
		value: activeValue,
		loop,
		iconPosition,
		size,
		selectionFollowsFocus,
		tabs,
		activeTab,
		activate(newValue: string) {
			activeValue.set(newValue);
			value = newValue;
		},
		register(el: HTMLElement, value: string) {
			if ($activeValue === value) {
				activeTab.set(el);
			}
			tabs.push(el);
			tabIndex[value] = el;
		},
		focusOn(el: HTMLElement) {
			activeTab.set(el);
		},
		blur(el: HTMLElement) {
			if (el === $activeTab) {
				activeTab.set(tabIndex[$activeValue]);
			}
		},
	});
</script>

<div dir="ltr" class={classes($$restProps, "navds-tabs", `navds-tabs--${size}`)} {...$$restProps}>
	<slot />
</div>
