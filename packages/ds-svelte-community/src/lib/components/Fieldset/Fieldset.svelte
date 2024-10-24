<script lang="ts" module>
	import newUniqueId from "$lib/components/local-unique-id";
	import { type FieldsetProps } from "./type";
</script>

<script lang="ts">
	import { classes, omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import Detail from "../typography/Detail/Detail.svelte";
	import ErrorMessage from "../typography/ErrorMessage/ErrorMessage.svelte";
	import Label from "../typography/Label/Label.svelte";

	let {
		hideLegend = false,
		error = "",
		errorId = "fserr-" + newUniqueId(),
		size = "medium",
		disabled = false,
		id = "fs-" + newUniqueId(),
		legend,
		children,
		description,
		...restProps
	}: FieldsetProps = $props();

	const srOnlyClass = hideLegend ? " navds-sr-only" : "";
	const inputDescriptionId = `fs-desc-${id}`;

	const showErrorMsg = $derived(!disabled && !!error);
</script>

<!-- aria-invalid={error ? "true" : undefined} -->
<fieldset
	{...omit(restProps, "class", "aria-invalid", "aria-describedby")}
	class={classes(restProps, "navds-fieldset", `navds-fieldset--${size}`)}
	class:navds-fieldset--error={!!error}
	aria-describedby={description ? inputDescriptionId : undefined}
>
	<Label {size} as="legend" class={"navds-fieldset__legend" + srOnlyClass}>
		{#if typeof legend === "string"}
			{legend}
		{:else}
			{@render legend()}
		{/if}
	</Label>

	{#if description}
		{#if size == "medium"}
			<BodyShort
				class={"navds-fieldset__description" + srOnlyClass}
				{size}
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
			<Detail class={"navds-fieldset__description" + srOnlyClass} id={inputDescriptionId} as="div">
				{#if typeof description === "string"}
					{description}
				{:else}
					{@render description()}
				{/if}
			</Detail>
		{/if}
	{/if}

	{@render children()}

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
