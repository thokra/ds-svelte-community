<script lang="ts">
	import { Label } from "$lib";
	import { createEventDispatcher, onDestroy, setContext } from "svelte";
	import { writable } from "svelte/store";
	import { classes, omit } from "../helpers";
	import {
		contextKey,
		type ToggleGroupContext,
		type ToggleGroupProps,
		type sizes,
		type variants,
	} from "./type";

	type $$Props = ToggleGroupProps;

	/**
	 * Changes padding and font-size.
	 */
	export let size: (typeof sizes)[number] = "medium";
	/**
	 * Controlled selected value.
	 */
	export let value: string;

	/**
	 * Label describing ToggleGroup.
	 */
	export let label = "";

	/**
	 * Changes design and interaction-visuals.
	 */
	export let variant: (typeof variants)[number] = "action";

	const currentValue = writable<string>(value);

	let previousValue = value;
	$: {
		if ($currentValue != previousValue) {
			value = $currentValue;
			previousValue = value;
		} else if (value != previousValue) {
			currentValue.set(value);
			previousValue = value;
		}
	}

	setContext<ToggleGroupContext>(contextKey, {
		value: currentValue,
		size,
	});

	const dispatch = createEventDispatcher();
	const unsubscribe = currentValue.subscribe((value) => {
		dispatch("change", value);
	});
	onDestroy(unsubscribe);
</script>

<div {...omit($$restProps, "class")} class={classes($$restProps, "navds-toggle-group__wrapper")}>
	{#if label}
		<Label {size} class="navds-toggle-group__label">{label}</Label>
	{/if}

	<div
		role="radiogroup"
		dir="ltr"
		class="navds-toggle-group navds-toggle-group--{size} navds-toggle-group--{variant}"
		style="outline:none"
		tabindex="0"
	>
		<!-- One or more `<ToggleGroupItem>`-->
		<slot />
	</div>
</div>
