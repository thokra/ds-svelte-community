<script lang="ts">
	import { setContext } from "svelte";
	import { writable } from "svelte/store";
	import { classes, omit } from "../helpers";
	import {
		contextKey,
		type TabContext,
		type TabsProps,
		type iconPositions,
		type sizes,
	} from "./type";

	type $$Props = TabsProps;
	/**
	 * Changes padding and font-size.
	 */
	export let size: (typeof sizes)[number] = "medium";

	/**
	 * Controlled selected value.
	 */
	export let value: string;

	/**
	 * Automatically activates tab on focus/navigation.
	 */
	export let selectionFollowsFocus = false;
	/**
	 * Loops back to start when navigating past last item.
	 */
	export let loop = false;
	/**
	 * Icon position in Tab.
	 */
	export let iconPosition: (typeof iconPositions)[number] = "left";

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

<div
	{...omit($$restProps, "class", "dir")}
	dir="ltr"
	class={classes($$restProps, "navds-tabs", `navds-tabs--${size}`)}
>
	<slot />
</div>
