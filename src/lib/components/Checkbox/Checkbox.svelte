<script lang="ts" context="module">
	import newUniqueId from "locally-unique-id-generator";
</script>

<script lang="ts">
	import { classes } from "../helpers";
	import BodyShort from "../typography/BodyShort.svelte";
	import BodyLong from "../typography/BodyLong.svelte";
	import Detail from "../typography/Detail.svelte";
	import { GetCheckboxGroupContext } from "./CheckboxGroup.svelte";
	import { createEventDispatcher } from "svelte";

	/**
	 * Adds error indication on checkbox
	 */
	export let error = false;

	/**
	 * Hides label and makes it viewable for screen-readers only.
	 */
	export let hideLabel = false;

	/**
	 * The value of the HTML element.
	 */

	export let value: string;

	/**
	 * Specify whether the Checkbox is in an indeterminate state
	 */
	export let indeterminate = false;

	/**
	 * Adds a description to extend labeling of Checkbox
	 */
	export let description = "";

	/**
	 * Changes font-size, padding and gaps
	 * @default "medium"
	 */
	export let size: "medium" | "small" | undefined = undefined;

	/**
	 * Disables element @note Avoid using if possible for accessibility purposes
	 */
	export let disabled = false;

	/**
	 * Override internal id
	 */
	export let id = "cb-" + newUniqueId();

	/**
	 * Controlled state for checkboxes.
	 */
	export let checked = false;

	type Events = {
		change: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		};
	};
	const dispatch = createEventDispatcher<Events>();
	const ctx = GetCheckboxGroupContext();
	const values = ctx && ctx.groupControlled ? ctx.values : null;

	$: checked = values && $values ? $values.includes(value) || false : checked;

	const hasErrorStore = ctx ? ctx.hasError : null;
	$: hasError = hasErrorStore ? $hasErrorStore : error;

	size = size ? size : ctx ? ctx.size : "medium";
</script>

<div
	class={classes($$restProps, "navds-checkbox", `navds-checkbox--${size}`)}
	class:navds-checkbox--error={hasError}
	class:navds-checkbox--disabled={disabled}
>
	<input
		{id}
		type="checkbox"
		class="navds-checkbox__input"
		aria-checked={indeterminate ? "mixed" : checked}
		aria-invalid={hasError}
		bind:indeterminate
		bind:checked
		{value}
		on:change={(e) => {
			if (ctx && ctx.groupControlled) {
				ctx.change(value);
			}
			/**
			 * Trigger when the checkbox changes. Will pass the event object as argument.
			 */
			dispatch("change", e);
		}}
		on:click
	/>
	<label for={id} class="navds-checkbox__label">
		<span class="navds-checkbox__content" class:navds-sr-only={hideLabel}>
			<BodyShort as="span" {size}>
				<!--
					Label content
				-->
				<slot />
			</BodyShort>
			{#if description}
				{#if size == "medium"}
					<BodyLong as="span" class="navds-checkbox__description">
						{description}
					</BodyLong>
				{:else}
					<Detail as="span" class="navds-checkbox__description">
						{description}
					</Detail>
				{/if}
			{/if}
		</span>
	</label>
</div>
