<!--
	@component
	Checkbox displays a list of options where multiple can be selected at once. When a choice is made, the user can click again to deselect it.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/checkbox).
-->

<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
	import { getContext } from "svelte";
	import Fieldset from "../Fieldset/Fieldset.svelte";
	import { CheckboxGroupContext, type Props } from "./type.svelte";

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
	import { classes } from "../helpers";

	let {
		value = $bindable([]),
		hideLegend = false,
		error = "",
		errorId = "",
		size = "medium",
		disabled = false,
		id = "cbg-" + newUniqueId(),
		legend,
		description,
		children,
		...restProps
	}: Props = $props();

	// const ctx: CheckboxGroupContext = {
	// 	change: (value: unknown) => {
	// 		if ($valuesStore.includes(value)) {
	// 			valuesStore.update((values) => values.filter((v) => v !== value));
	// 		} else {
	// 			valuesStore.update((values) => [...values, value]);
	// 		}
	// 	},
	// 	values: valuesStore,
	// 	groupControlled: value !== undefined,
	// 	hasError: errorStore,
	// 	size,
	// };
	const ctx = new CheckboxGroupContext();
	ctx.values = value;
	ctx.groupControlled = value !== undefined;
	ctx.hasError = !!error;
	$effect(() => {
		ctx.groupControlled = value !== undefined;
		ctx.values = value;
		ctx.hasError = !!error;
	});

	setContext(contextKey, ctx);
</script>

<Fieldset
	{...restProps}
	{error}
	{errorId}
	{hideLegend}
	{id}
	{disabled}
	{size}
	class={classes(restProps, "navds-checkbox-group", `navds-checkbox-group--${size}`)}
>
	<div class="navds-checkboxes">
		<!-- Content of the fieldset -->
		{@render children()}
	</div>
</Fieldset>
