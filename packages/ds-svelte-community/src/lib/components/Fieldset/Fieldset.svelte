<script lang="ts" context="module">
	import newUniqueId from "locally-unique-id-generator";
	import { contextKey, type FieldSetContext, type FieldsetProps } from "./type";
</script>

<script lang="ts">
	import { setContext } from "svelte";
	import { classes, omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import Detail from "../typography/Detail/Detail.svelte";
	import ErrorMessage from "../typography/ErrorMessage/ErrorMessage.svelte";
	import Label from "../typography/Label/Label.svelte";

	/**
	 * If enabled shows the legend and description for screenreaders only
	 */
	export let hideLegend = false;

	/**
	 * Toggles error propagation to child-elements
	 * @default true
	 */
	// export let errorPropagation = true;

	/**
	 * Error message for element
	 */
	export let error = "";

	/**
	 * Override internal errorId
	 */
	export let errorId: string = "fserr-" + newUniqueId();

	/**
	 * Changes font-size, padding and gaps
	 */
	export let size: "medium" | "small" = "medium";
	/**
	 * Disables element
	 * @note Avoid using if possible for accessibility purposes
	 */
	export let disabled = false;

	/**
	 * Override internal id
	 */
	export let id = "fs-" + newUniqueId();

	type $$Props = FieldsetProps;

	const ctx: FieldSetContext = {
		error,
		errorId,
		size,
		disabled,
	};

	setContext<FieldSetContext>(contextKey, ctx);

	const srOnlyClass = hideLegend ? " navds-sr-only" : "";
	const inputDescriptionId = `fs-desc-${id}`;

	$: showErrorMsg = !disabled && !!error;
</script>

<!-- svelte-ignore a11y-role-supports-aria-props -->
<fieldset
	{...omit($$restProps, "class", "aria-invalid", "aria-describedby")}
	aria-invalid={error ? "true" : undefined}
	class={classes($$restProps, "navds-fieldset", `navds-fieldset--${size}`)}
	class:navds-fieldset--error={!!error}
	aria-describedby={$$slots.description ? inputDescriptionId : undefined}
>
	<Label {size} as="legend" class={"navds-fieldset__legend" + srOnlyClass}>
		<slot name="legend" />
	</Label>

	{#if $$slots.description}
		{#if size == "medium"}
			<BodyShort
				class={"navds-fieldset__description" + srOnlyClass}
				id={inputDescriptionId}
				as="div"
			>
				<slot name="description" />
			</BodyShort>
		{:else}
			<Detail class={"navds-fieldset__description" + srOnlyClass} id={inputDescriptionId} as="div">
				<slot name="description" />
			</Detail>
		{/if}
	{/if}
	<slot />

	<div
		id={errorId}
		aria-relevant="additions removals"
		aria-live="polite"
		class="navds-fieldset__error"
	>
		{#if showErrorMsg}
			<ErrorMessage {size}>{error}</ErrorMessage>
		{/if}
	</div>
</fieldset>
