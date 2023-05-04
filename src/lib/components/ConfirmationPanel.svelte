<script lang="ts">
	import { Checkbox } from "./Checkbox";
	import { classes } from "./helpers";
	import BodyLong from "./typography/BodyLong.svelte";
	import ErrorMessage from "./typography/ErrorMessage.svelte";

	/**
	 * Error message for element
	 */
	export let error = "";

	/**
	 * Override internal errorId
	 */
	export let errorId = "";

	/**
	 * Changes font-size, padding and gaps
	 */
	export let size: "medium" | "small" = "medium";

	/**
	 * The value of the HTML element.
	 */
	export let value = "";

	/**
	 * Override internal id
	 */
	export let id = "";

	export let checked = false;
</script>

<div
	class={classes($$restProps, "navds-confirmation-panel", "navds-form-field")}
	class:navds-confirmation-panel--small={size === "small"}
	class:navds-confirmation-panel--error={error != ""}
	class:navds-confirmation-panel--checked={!!checked}
>
	<div class="navds-confirmation-panel__inner">
		{#if $$slots.default}
			<BodyLong
				{size}
				class="navds-confirmation-panel__content"
				id={`confirmation-panel-${id}`}
				as="div"
			>
				<slot />
			</BodyLong>
		{/if}
		<Checkbox bind:checked {value} error={!!error} {size}>
			<slot name="label" />
		</Checkbox>
	</div>
	<div
		class="navds-form-field__error"
		id={errorId}
		aria-relevant="additions removals"
		aria-live="polite"
	>
		{#if !!error}
			<ErrorMessage {size}>{error}</ErrorMessage>
		{/if}
	</div>
</div>
