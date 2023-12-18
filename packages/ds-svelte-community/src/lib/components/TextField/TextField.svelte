<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
</script>

<script lang="ts">
	import { BodyShort, Detail, ErrorMessage, Label } from "$lib";
	import { classes, omit } from "../helpers";
	import type { Props, sizes, types } from "./type";

	type $$Props = Props;

	/**
	 * Controlled value.
	 */
	export let value: string | number = "";

	/**
	 * Exposes the HTML size attribute.
	 */
	export let htmlSize: number | undefined = undefined;

	/**
	 * If enabled shows the label and description for screenreaders only.
	 */
	export let hideLabel = false;

	/**
	 * Type of form control. Picking the correct type helps user fill inn their required information.
	 */
	export let type: (typeof types)[number] = "text";

	/**
	 * Error message for element.
	 */
	export let error = "";

	/**
	 * Override internal errorId.
	 */
	export let errorId = "tf-" + newUniqueId();

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
	 * Override internal id.
	 */
	export let id = "tf-" + newUniqueId();

	const inputDescriptionId = `tf-desc-${id}`;

	$: srOnlyClass = hideLabel ? " navds-sr-only" : "";
	$: inputProps = {
		id,
		"aria-invalid": (error ? "true" : undefined) as "true" | undefined,
		"aria-describedby": inputDescriptionId,
		class: "navds-text-field__input navds-body-short navds-body-short--" + size,
		size: htmlSize,
		...omit($$restProps, "id", "class", "aria-invalid", "size"),
	};
</script>

<div
	class={classes($$restProps, "navds-form-field", `navds-form-field--${size}`)}
	class:navds-text-field--error={!!error}
	class:navds-text-field--disabled={disabled}
	class:navds-form-field--disabled={disabled}
>
	<Label for={id} {size} class={"navds-form-field__label" + srOnlyClass}>
		<slot name="label" />
	</Label>

	{#if $$slots.description}
		{#if size == "medium"}
			<BodyShort
				class={"navds-form-field__description" + srOnlyClass}
				id={inputDescriptionId}
				as="div"
			>
				<slot name="description" />
			</BodyShort>
		{:else}
			<Detail
				class={"navds-form-field__description" + srOnlyClass}
				id={inputDescriptionId}
				as="div"
			>
				<slot name="description" />
			</Detail>
		{/if}
	{/if}

	{#if type == "text"}
		<input
			{...inputProps}
			type="text"
			bind:value
			on:keydown
			on:keypress
			on:blur
			on:change
			on:focus
			on:input
			on:keyup
		/>
	{:else if type == "password"}
		<input
			{...inputProps}
			type="password"
			bind:value
			on:keydown
			on:keypress
			on:blur
			on:change
			on:focus
			on:input
			on:keyup
		/>
	{:else if type == "url"}
		<input
			{...inputProps}
			type="url"
			bind:value
			on:keydown
			on:keypress
			on:blur
			on:change
			on:focus
			on:input
			on:keyup
		/>
	{:else if type == "number"}
		<input
			{...inputProps}
			type="number"
			bind:value
			on:keydown
			on:keypress
			on:blur
			on:change
			on:focus
			on:input
			on:keyup
		/>
	{:else if type == "email"}
		<input
			{...inputProps}
			type="email"
			bind:value
			on:keydown
			on:keypress
			on:blur
			on:change
			on:focus
			on:input
			on:keyup
		/>
	{:else if type == "tel"}
		<input
			{...inputProps}
			type="tel"
			bind:value
			on:keydown
			on:keypress
			on:blur
			on:change
			on:focus
			on:input
			on:keyup
		/>
	{:else}
		<h1 style="background: red; color: white; padding: 10px;">INVALID TYPE {type}</h1>
	{/if}
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
