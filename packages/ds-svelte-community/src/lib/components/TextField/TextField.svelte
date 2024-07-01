<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
</script>

<script lang="ts">
	import { BodyShort, Detail, ErrorMessage, Label } from "$lib";
	import { classes, omit } from "../helpers";
	import type { Props } from "./type";

	let {
		value = $bindable(""),
		id = "tf-" + newUniqueId(),
		hideLabel = false,
		type = "text",
		error = "",
		errorId = "tf-" + newUniqueId(),
		size = "medium",
		disabled = false,
		htmlSize,
		label,
		description,
		...restProps
	}: Props = $props();

	const inputDescriptionId = `tf-desc-${id}`;

	let srOnlyClass = $derived(hideLabel ? " navds-sr-only" : "");
	let inputProps = $derived({
		id,
		"aria-invalid": (error ? "true" : undefined) as "true" | undefined,
		"aria-describedby": inputDescriptionId,
		class: "navds-text-field__input navds-body-short navds-body-short--" + size,
		size: htmlSize,
		...omit(restProps, "id", "class", "aria-invalid", "size"),
	});
</script>

<div
	class={classes(restProps, "navds-form-field", `navds-form-field--${size}`)}
	class:navds-text-field--error={!!error}
	class:navds-text-field--disabled={disabled}
	class:navds-form-field--disabled={disabled}
>
	<Label for={id} {size} class={"navds-form-field__label" + srOnlyClass}>
		{#if typeof label === "string"}
			{label}
		{:else}
			{@render label()}
		{/if}
	</Label>

	{#if description}
		{#if size == "medium"}
			<BodyShort
				class={"navds-form-field__description" + srOnlyClass}
				id={inputDescriptionId}
				as="div"
			>
				{#if typeof description === "string"}
					{description}
				{:else}
					{@render description()}
				{/if}
			</BodyShort>
		{:else}
			<Detail
				class={"navds-form-field__description" + srOnlyClass}
				id={inputDescriptionId}
				as="div"
			>
				{#if typeof description === "string"}
					{description}
				{:else}
					{@render description()}
				{/if}
			</Detail>
		{/if}
	{/if}

	<input {type} {...inputProps} bind:value />
	<div
		class="navds-form-field__error"
		id={errorId}
		aria-relevant="additions removals"
		aria-live="polite"
	>
		{#if error}
			<ErrorMessage {size}>
				{error}
			</ErrorMessage>
		{/if}
	</div>
</div>
