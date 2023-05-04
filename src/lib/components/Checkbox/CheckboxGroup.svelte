<script lang="ts" context="module">
	import newUniqueId from "locally-unique-id-generator";
	import Fieldset from "../Fieldset.svelte";
	import { getContext } from "svelte";
	import type { Readable } from "svelte/store";

	export type CheckboxGroupContext = {
		change: (value: any) => void;
		groupControlled: boolean;
		values: Readable<any[]>;
		hasError: Readable<boolean>;
		size: "medium" | "small";
	};

	const contextKey = Symbol("CheckboxGroupContext");

	export function GetCheckboxGroupContext(): CheckboxGroupContext | undefined {
		if (!hasContext(contextKey)) {
			return undefined;
		}
		return getContext<CheckboxGroupContext>(contextKey);
	}
</script>

<script lang="ts">
	import { classes } from "../helpers";
	import { writable } from "svelte/store";
	import { setContext, hasContext } from "svelte";

	/**
	 * Controlled state for checkboxes.
	 */
	export let value: any[] = [];

	/**
	 * If enabled shows the legend and description for screen readers only
	 */
	export let hideLegend = false;

	/**
	 * Error message for element
	 */
	export let error: any = false;

	/**
	 * Override internal errorId
	 */
	export let errorId: string = "";

	/**
	 * Changes font-size, padding and gaps
	 */
	export let size: CheckboxGroupContext["size"] = "medium";

	/**
	 * Disables element @note Avoid using if possible for accessibility purposes
	 */
	export let disabled = false;

	/**
	 * Override internal id
	 */
	export let id = "cbg-" + newUniqueId();

	const valuesStore = writable<any[]>(value);
	$: value = $valuesStore;
	const errorStore = writable<boolean>(!!error);

	const ctx: CheckboxGroupContext = {
		change: (value: any) => {
			if ($valuesStore.includes(value)) {
				valuesStore.update((values) => values.filter((v) => v !== value));
			} else {
				valuesStore.update((values) => [...values, value]);
			}
		},
		values: valuesStore,
		groupControlled: $$props.value !== undefined,
		hasError: errorStore,
		size,
	};

	setContext(contextKey, ctx);
</script>

<Fieldset
	{...$$restProps}
	{error}
	{errorId}
	{hideLegend}
	{id}
	{disabled}
	{size}
	class={classes($$restProps, "navds-checkbox-group", `navds-checkbox-group--${size}`)}
>
	<svelte:fragment slot="legend"><slot name="legend" /></svelte:fragment>
	<svelte:fragment slot="description"><slot name="description" /></svelte:fragment>
	<div class="navds-checkboxes">
		<slot />
	</div>
</Fieldset>
