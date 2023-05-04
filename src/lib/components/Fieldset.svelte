<script lang="ts" context="module">
	import newUniqueId from "locally-unique-id-generator";
	import { getContext } from "svelte";

	export type FieldSetContext = {
		/**
		 * Error message applied to element,
		 */
		error: string;
		/**
		 * Overrides internal errorId
		 */
		errorId: string;
		/**
		 * Changes paddings, margins and font-sizes
		 */
		size: "medium" | "small";
		/**
		 * Sets fieldset and all form-children to disabled
		 */
		disabled: boolean;
	};

	const contextKey = Symbol("FieldsetContext");

	export function GetFieldsetContext(): FieldSetContext | undefined {
		return getContext<FieldSetContext>(contextKey);
	}
</script>

<script lang="ts">
	import { setContext } from "svelte";
	import { classes } from "./helpers";
	import Label from "./typography/Label.svelte";
	import BodyLong from "./typography/BodyLong.svelte";
	import Detail from "./typography/Detail.svelte";
	import ErrorMessage from "./typography/ErrorMessage.svelte";

	/**
	 * If enabled shows the legend and description for screenreaders only
	 */
	export let hideLegend = false;

	/**
	 * Toggles error propagation to child-elements
	 * @default true
	 */
	export let errorPropagation = true;

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
	{...$$restProps}
	aria-invalid={error ? "true" : "false"}
	class={classes($$restProps, "navds-fieldset", `navds-fieldset--${size}`)}
	class:navds-fieldset--error={!!error}
>
	<Label {size} as="legend" class={"navds-fieldset__legend" + srOnlyClass}>
		<slot name="legend" />
	</Label>

	{#if $$slots.description}
		{#if size == "medium"}
			<BodyLong
				class={"navds-fieldset__description" + srOnlyClass}
				id={inputDescriptionId}
				size="small"
				as="div"
			>
				<slot name="description" />
			</BodyLong>
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
