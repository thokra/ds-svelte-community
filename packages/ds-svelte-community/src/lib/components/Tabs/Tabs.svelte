<!--
	@component
	Tabs are used to switch between panels on a page. This helps users navigate between related content without changing context. The component consists of a row of tab buttons. A tab button is always selected, because a panel is always displayed.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/tabs).

	_Note: This component does not yet follow all best practices regarding accessibility._
-->
<script lang="ts">
	import { setContext } from "svelte";
	import { classes, omit } from "../helpers";
	import { TabContext, contextKey, type TabsProps } from "./type.svelte";

	// type $$Props = TabsProps;
	// /**
	//  * Changes padding and font-size.
	//  */
	// export let size: (typeof sizes)[number] = "medium";

	// /**
	//  * Controlled selected value.
	//  */
	// export let value: string;

	// /**
	//  * Automatically activates tab on focus/navigation.
	//  */
	// export let selectionFollowsFocus = false;
	// /**
	//  * Loops back to start when navigating past last item.
	//  */
	// export let loop = false;
	// /**
	//  * Icon position in Tab.
	//  */
	// export let iconPosition: (typeof iconPositions)[number] = "left";
	let {
		size = "medium",
		value = $bindable(),
		selectionFollowsFocus = false,
		loop = false,
		iconPosition = "left",
		children,
		...restProps
	}: TabsProps = $props();

	// const id = newUniqueId();
	// const activeValue = writable<string>(value);
	// $: activeValue.set(value);
	// $: value = $activeValue;

	// const activeTab = writable<HTMLElement>(undefined);

	// let tabs: HTMLElement[] = [];
	// let tabIndex: { [key: string]: HTMLElement } = {};

	// setContext<TabContext>(contextKey, {
	// 	value: activeValue,
	// 	loop,
	// 	iconPosition,
	// 	size,
	// 	selectionFollowsFocus,
	// 	tabs,
	// 	activeTab,
	// 	activate(newValue: string) {
	// 		activeValue.set(newValue);
	// 		value = newValue;
	// 	},
	// 	register(el: HTMLElement, value: string) {
	// 		if ($activeValue === value) {
	// 			activeTab.set(el);
	// 		}
	// 		tabs.push(el);
	// 		tabIndex[value] = el;
	// 	},
	// 	focusOn(el: HTMLElement) {
	// 		activeTab.set(el);
	// 	},
	// 	blur(el: HTMLElement) {
	// 		if (el === $activeTab) {
	// 			activeTab.set(tabIndex[$activeValue]);
	// 		}
	// 	},
	// 	idFor(typ, val) {
	// 		return `tabs-${typ}-${id}-${val}`;
	// 	},
	// });

	const ctx = new TabContext(value);
	$effect(() => {
		ctx.value = value;
		ctx.loop = loop;
		ctx.iconPosition = iconPosition;
		ctx.size = size;
		ctx.selectionFollowsFocus = selectionFollowsFocus;
	});
	setContext<TabContext>(contextKey, ctx);
</script>

<div
	{...omit(restProps, "class", "dir")}
	dir="ltr"
	class={classes(restProps, "navds-tabs", `navds-tabs--${size}`)}
	data-orientation="horizontal"
>
	{@render children()}
</div>
