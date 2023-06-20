<script lang="ts" context="module">
	/* TODO: Add error handling */

	import newUniqueId from "locally-unique-id-generator";

	export type SearchClearEvent =
		| { trigger: "Click"; event: MouseEvent }
		| { trigger: "Escape"; event: KeyboardEvent };
</script>

<script lang="ts">
	import { Loader } from "$lib";
	import { XMark as Close, MagnifyingGlass as SearchIcon } from "$lib/icons";
	import { createEventDispatcher } from "svelte";
	import { classes, omit } from "../helpers";
	import BodyShort from "../typography/BodyShort.svelte";
	import Label from "../typography/Label.svelte";
	import SearchButton from "./SearchButton.svelte";
	import type { Props } from "./type";

	type $$Props = Props;

	/**
	 * Search label.
	 * @note Will be hidden by default, is required for accessibility reasons.
	 */
	export let label: string;
	/**
	 * Shows label and description for screen readers only.
	 */
	export let hideLabel = true;

	/**
	 * aria-label on clear button.
	 */
	export let clearButtonLabel = "Clear";

	/**
	 * If false, removes clear-button option from input.
	 */
	export let clearButton = true;
	/**
	 * Changes button-variant, "simple" removes button
	 */
	export let variant: "primary" | "secondary" | "simple" = "primary";

	/**
	 * Adds a description to extend labling of a field.
	 */
	export let description = "";

	/**
	 * Size of input.
	 */
	export let size: "medium" | "small" = "medium";

	/**
	 * Value of input.
	 */
	export let value = "";

	/**
	 * Disables element
	 * @note Avoid using if possible for accessibility purposes
	 */
	export let disabled = false;

	/**
	 * Loading state.
	 * @note Non-standard. Only available in ds-svelte-community.
	 */
	export let loading = false;

	let hasError = false;

	const baseID = "search-" + newUniqueId();

	$: srOnlyClass = hideLabel ? "navds-sr-only" : "";

	let input: HTMLInputElement | undefined;

	const dispatcher = createEventDispatcher<{
		clear: { event: SearchClearEvent };
	}>();

	function handleClearClick(event: MouseEvent) {
		// Called when clear is triggered
		dispatcher("clear", { event: { trigger: "Click", event } });
		value = "";
		if (input) input.focus();
	}

	function handleInputKeypress(event: KeyboardEvent) {
		if (event.key === "Escape" && value == "") {
			// Called when clear is triggered
			dispatcher("clear", { event: { trigger: "Escape", event } });
			value = "";
			if (input) input.focus();
			event.preventDefault();
		}
	}
</script>

<div
	class={classes($$restProps, "navds-form-field", `navds-form-field--${size}`, "navds-search")}
	class:navds-search--error={hasError}
	class:navds-search--disabled={disabled}
>
	<Label for={baseID} {size} class={classes({}, "navds-form-field__label", srOnlyClass)}>
		{label}
	</Label>
	{#if description}
		<BodyShort as="div" class="navds-form-field__description {srOnlyClass}" id={baseID} {size}>
			{description}
		</BodyShort>
	{/if}
	<div class="navds-search__wrapper">
		<div class="navds-search__wrapper-inner">
			{#if variant == "simple"}
				{#if loading}
					<span class="navds-search__search-icon" style="height:50%;">
						<Loader />
					</span>
				{:else}
					<SearchIcon aria-hidden class="navds-search__search-icon" />
				{/if}
			{/if}
			<!-- svelte-ignore a11y-no-redundant-roles -->
			<!-- Called when input is changed -->
			<input
				{...omit($$restProps, "class", "value", "type", "role")}
				bind:this={input}
				bind:value
				type="search"
				role="searchbox"
				class="navds-search__input navds-search__input--{variant} navds-text-field__input navds-body-short navds-body-{size}"
				on:keypress={handleInputKeypress}
				on:change
				on:input
				on:blur
				on:mousedown
				on:mouseup
				on:keydown
				on:keyup
				on:keypress
				on:focus
				on:focusin
				on:focusout
			/>
			{#if value && clearButton}
				<button type="button" class="navds-search__button-clear" on:click={handleClearClick}>
					<span class="navds-sr-only">
						{clearButtonLabel ? clearButtonLabel : "Empty"}
					</span>
					<Close aria-hidden />
				</button>
			{/if}
		</div>

		<!-- Place for custom button -->
		<slot>
			{#if variant != "simple"}
				<!-- Called when search button is clicked -->
				<SearchButton on:click {disabled} {variant} {size} {loading} />
			{/if}
		</slot>
	</div>
	<div class="navds-form-field__error" aria-relevant="additions removals" aria-live="polite">
		<!-- {showErrorMsg && (
            <ErrorMessage size={size}>{props.error}</ErrorMessage>
          )} -->
	</div>
</div>
