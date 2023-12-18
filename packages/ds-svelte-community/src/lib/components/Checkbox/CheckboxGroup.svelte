<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
	import { getContext } from "svelte";
	import Fieldset from "../Fieldset/Fieldset.svelte";
	import type { CheckboxGroupContext, Props, sizes } from "./type";

	const contextKey = Symbol("CheckboxGroupContext");

	export function GetCheckboxGroupContext(): CheckboxGroupContext | undefined {
		if (!hasContext(contextKey)) {
			return undefined;
		}
		return getContext<CheckboxGroupContext>(contextKey);
	}
</script>

<script lang="ts">
	import { hasContext, setContext } from "svelte";
	import { writable } from "svelte/store";
	import { classes } from "../helpers";

	type $$Props = Props;

	/**
	 * Controlled state for checkboxes.
	 */
	export let value: unknown[] = [];

	/**
	 * If enabled shows the legend and description for screen readers only.
	 */
	export let hideLegend = false;

	/**
	 * Error message for element.
	 */
	export let error = "";

	/**
	 * Override internal errorId.
	 */
	export let errorId = "";

	/**
	 * Changes font-size, padding and gaps.
	 */
	export let size: (typeof sizes)[number] = "medium";

	/**
	 * Disables element @note Avoid using if possible for accessibility purposes.
	 */
	export let disabled = false;

	/**
	 * Override internal id.
	 */
	export let id = "cbg-" + newUniqueId();

	/**
	 * Legend of the fieldset.
	 */
	export let legend = "";

	/**
	 * Description of the fieldset.
	 */
	export let description = "";

	const valuesStore = writable<unknown[]>(value);
	$: value = $valuesStore;
	const errorStore = writable<boolean>(!!error);

	const ctx: CheckboxGroupContext = {
		change: (value: unknown) => {
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
	<!-- Legend of the fieldset, fallback to `legend` prop. -->
	<svelte:fragment slot="legend"><slot name="legend">{legend}</slot></svelte:fragment>
	<!-- Description of the fieldset, fallback to `description` prop. -->
	<svelte:fragment slot="description"><slot name="description">{description}</slot></svelte:fragment
	>
	<div class="navds-checkboxes">
		<!-- Content of the fieldset -->
		<slot />
	</div>
</Fieldset>
