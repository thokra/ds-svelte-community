<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
</script>

<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { classes, omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import { GetCheckboxGroupContext } from "./CheckboxGroup.svelte";
	import type { CheckboxProps } from "./type";

	type $$Props = CheckboxProps;

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

	export let value: string | undefined = undefined;

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

	const lblID = "cblbl-" + newUniqueId();
	$: checked = values && $values ? $values.includes(value) || false : checked;

	const hasErrorStore = ctx ? ctx.hasError : null;
	$: hasError = hasErrorStore ? $hasErrorStore : error;

	size = size ? size : ctx ? ctx.size : "medium";
</script>

<div
	class={classes($$props, "navds-checkbox", `navds-checkbox--${size}`)}
	class:navds-checkbox--error={hasError}
	class:navds-checkbox--disabled={disabled}
>
	<input
		{...omit($$restProps, "class")}
		{id}
		type="checkbox"
		class="navds-checkbox__input"
		aria-checked={indeterminate ? "mixed" : undefined}
		aria-invalid={hasError ? "true" : undefined}
		aria-labelledby={lblID}
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
	<label for={id} class="navds-checkbox__label" id={lblID}>
		<span class="navds-checkbox__icon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="0.8125rem"
				height="0.625rem"
				viewBox="0 0 13 10"
				fill="none"
				focusable="false"
				role="img"
				aria-hidden="true"
			>
				<path
					d="M4.03524 6.41478L10.4752 0.404669C11.0792 -0.160351 12.029 -0.130672 12.5955 0.47478C13.162 1.08027 13.1296 2.03007 12.5245 2.59621L5.02111 9.59934C4.74099 9.85904 4.37559 10 4.00025 10C3.60651 10 3.22717 9.84621 2.93914 9.56111L0.439143 7.06111C-0.146381 6.47558 -0.146381 5.52542 0.439143 4.93989C1.02467 4.35437 1.97483 4.35437 2.56036 4.93989L4.03524 6.41478Z"
					fill="currentColor"
				/>
			</svg>
		</span>
		<span class="navds-checkbox__content" class:navds-sr-only={hideLabel}>
			<BodyShort as="span" {size} class="navds-checkbox__label-text" aria-hidden>
				<!--
					Label content
				-->
				<slot />
			</BodyShort>
			{#if description}
				<BodyShort
					as="span"
					class="navds-form-field__subdescription navds-checkbox__description"
					{size}
					aria-hidden
				>
					{description}
				</BodyShort>
			{/if}
		</span>
	</label>
</div>
