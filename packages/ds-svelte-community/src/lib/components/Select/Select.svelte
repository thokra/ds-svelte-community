<!--
@component
Select gives the user the ability to choose from predefined answer options.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/select).
-->

<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
</script>

<script lang="ts">
	import ChevronDownIcon from "$lib/icons/ChevronDownIcon.svelte";
	import { classes, omit } from "../helpers";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import Detail from "../typography/Detail/Detail.svelte";
	import ErrorMessage from "../typography/ErrorMessage/ErrorMessage.svelte";
	import Label from "../typography/Label/Label.svelte";
	import type { Props } from "./type";

	let {
		label = "",
		hideLabel = false,
		style,
		size = "medium",
		disabled = false,
		error = "",
		value = $bindable(""),
		children,
		description,
		...restProps
	}: Props = $props();

	const baseID = newUniqueId();
	const id = "select-" + baseID;
	const errorID = "select-error-" + baseID;
	let srOnlyClass = hideLabel ? "navds-sr-only" : "";

	let hasError = $derived(!!error);
</script>

<div
	class={classes(restProps, "navds-form-field", `navds-form-field--${size}`)}
	class:navds-form-field--disabled={disabled}
	class:navds-select--error={hasError}
>
	<Label for={id} {size} class="navds-form-field__label {srOnlyClass}">
		{label}
	</Label>

	{#if description}
		{#if size === "medium"}
			<BodyLong class="navds-form-field__description {srOnlyClass}" size="small" as="div">
				{@render description()}
			</BodyLong>
		{:else}
			<Detail class="navds-form-field__description {srOnlyClass}" size="small" as="div">
				{@render description()}
			</Detail>
		{/if}
	{/if}

	<div class="navds-select__container" {style}>
		<select
			{...omit(restProps, "class")}
			bind:value
			class={classes(
				restProps,
				"navds-select__input",
				"navds-body-short",
				`navds-body-short--${size ?? "medium"}`,
			)}
			{id}
			{disabled}
			aria-invalid={hasError ? true : undefined}
			aria-describedby={hasError ? errorID : undefined}
		>
			{@render children()}
		</select>
		<ChevronDownIcon class="navds-select__chevron" aria-hidden />
	</div>

	<div
		class="navds-form-field__error"
		id={errorID}
		aria-relevant="additions removals"
		aria-live="polite"
	>
		{#if hasError}
			<ErrorMessage {size}>{error}</ErrorMessage>
		{/if}
	</div>
</div>
