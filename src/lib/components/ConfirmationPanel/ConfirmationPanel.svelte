<script lang="ts" context="module">
	import newUniqueId from "locally-unique-id-generator";
</script>

<script lang="ts">
	import { Checkbox } from "../Checkbox";
	import { classes, omit } from "../helpers";
	import BodyLong from "../typography/BodyLong.svelte";
	import ErrorMessage from "../typography/ErrorMessage.svelte";
	import type { Props } from "./type";

	type $$Props = Props;

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
	export let size: "medium" | "small" = "medium";

	/**
	 * The value of the HTML element.
	 */
	export let value = "";

	/**
	 * Override internal id.
	 */
	export let id = "";

	/**
	 * Wether the checkbox is checked, can be used with `bind:checked`.
	 */
	export let checked = false;

	$: uid = id || "confirmation-panel-" + newUniqueId();
</script>

<div
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-confirmation-panel", "navds-form-field")}
	class:navds-confirmation-panel--small={size === "small"}
	class:navds-confirmation-panel--error={error != ""}
	class:navds-confirmation-panel--checked={!!checked}
>
	<div class="navds-confirmation-panel__inner">
		{#if $$slots.default}
			<BodyLong {size} class="navds-confirmation-panel__content" id={uid} as="div">
				<!-- Description -->
				<slot />
			</BodyLong>
		{/if}
		<Checkbox bind:checked {value} error={!!error} {size} aria-describedby={uid}>
			<!-- Label text -->
			<slot name="label" />
		</Checkbox>
	</div>
	<div class="navds-form-field__error" id={errorId} role="alert">
		{#if !!error}
			<ErrorMessage {size}>{error}</ErrorMessage>
		{/if}
	</div>
</div>
