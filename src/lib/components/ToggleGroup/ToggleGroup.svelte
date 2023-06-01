<script lang="ts" context="module">
	import type { Readable } from "svelte/store";

	export type ToggleGroupContext = {
		value: Readable<string>;
		size: "medium" | "small";
	};
</script>

<script lang="ts">
	import { createEventDispatcher, onDestroy, setContext } from "svelte";
	import { writable } from "svelte/store";
	import { classes } from "../helpers";
	import Label from "../typography/Label.svelte";

	/**
	 * Changes padding and font-size
	 * @default "medium"
	 */
	export let size: "medium" | "small" = "medium";
	/**
	 * Controlled selected value
	 */
	export let value: string;

	/**
	 * Label describing ToggleGroup
	 */
	export let label = "";

	/**
	 * Changes design and interaction-visuals
	 * @default "action"
	 */
	export let variant: "action" | "neutral" = "action";

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

	setContext<ToggleGroupContext>("toggleGroup", {
		value: currentValue,
		size,
	});

	const dispatch = createEventDispatcher();
	const unsubscribe = currentValue.subscribe((value) => {
		dispatch("change", value);
	});
	onDestroy(unsubscribe);
</script>

<div class={classes($$restProps, "navds-toggle-group__wrapper")}>
	{#if label}
		<Label {size} class="navds-toggle-group__label">{label}</Label>
	{/if}

	<div
		role="radiogroup"
		dir="ltr"
		class="navds-toggle-group navds-toggle-group--{size} navds-toggle-group--{variant}"
	>
		<slot />
	</div>
</div>
