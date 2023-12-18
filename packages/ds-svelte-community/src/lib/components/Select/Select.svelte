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
	import type { Props, sizes } from "./type";

	type $$Props = Props;

	/**
	 * Exposes the HTML size attribute.
	 */
	export let htmlSize: number | undefined = undefined;
	/**
	 * Label for select.
	 */
	export let label = "";
	/**
	 * If enabled shows the label and description for screenreaders only.
	 */
	export let hideLabel = false;
	/**
	 * Sets inline-style on select wrapper.
	 */
	export let style: string | undefined = undefined;

	/**
	 * Changes font-size, padding and gaps.
	 */
	export let size: (typeof sizes)[number] = "medium";

	/**
	 * Disables element.
	 * @note Avoid using if possible for accessibility purposes.
	 */
	export let disabled = false;

	/**
	 * Error message for element.
	 */
	export let error = "";

	/**
	 * Selected value.
	 */
	export let value = "";

	const baseID = newUniqueId();
	const id = "select-" + baseID;
	const errorID = "select-error-" + baseID;
	let srOnlyClass = hideLabel ? "navds-sr-only" : "";

	$: hasError = !!error;
</script>

<div
	class={classes($$restProps, "navds-form-field", `navds-form-field--${size}`)}
	class:navds-form-field--disabled={disabled}
	class:navds-select--error={hasError}
>
	<Label for={id} {size} class="navds-form-field__label {srOnlyClass}">
		{label}
	</Label>

	{#if $$slots.description}
		{#if size === "medium"}
			<BodyLong class="navds-form-field__description {srOnlyClass}" size="small" as="div">
				<!-- Extra description -->
				<slot name="description" />
			</BodyLong>
		{:else}
			<Detail class="navds-form-field__description {srOnlyClass}" size="small" as="div">
				<slot name="description" />
			</Detail>
		{/if}
	{/if}

	<div class="navds-select__container" {style}>
		<select
			{...omit($$restProps, "class")}
			bind:value
			class={classes(
				$$restProps,
				"navds-select__input",
				"navds-body-short",
				`navds-body-short--${size ?? "medium"}`,
			)}
			size={htmlSize}
			{id}
			{disabled}
			aria-invalid={hasError ? true : undefined}
			aria-describedby={hasError ? errorID : undefined}
		>
			<!-- List of `<option>` -->
			<slot />
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
