<script lang="ts" context="module">
	/* TODO: Add error handling */

	import newUniqueId from "locally-unique-id-generator";

	export type SearchClearEvent =
		| { trigger: "Click"; event: MouseEvent }
		| { trigger: "Escape"; event: KeyboardEvent };
</script>

<script lang="ts">
	import { classes } from "../helpers";
	import Label from "../typography/Label.svelte";
	import BodyShort from "../typography/BodyShort.svelte";
	import { MagnifyingGlass as SearchIcon, XMark as Close } from "$lib/icons";
	import SearchButton from "./SearchButton.svelte";
	import { createEventDispatcher } from "svelte";

	/**
	 * Search label
	 * @note Will be hidden by default, is required for accessibility reasons.
	 */
	export let label: string;
	/**
	 * Shows label and description for screen readers only
	 * @default true
	 */
	export let hideLabel = true;

	/**
	 * aria-label on clear button
	 * @default "Clear"
	 */
	export let clearButtonLabel = "Clear";

	/**
	 * If false, removes clear-button option from input.
	 * @default true
	 */
	export let clearButton = true;
	/**
	 * Changes button-variant, "simple" removes button
	 * @default "primary"
	 */
	export let variant: "primary" | "secondary" | "simple" = "primary";

	export let description = "";

	export let size: "medium" | "small" = "medium";

	export let value = "";

	let hasError = false;
	export let disabled = false;

	const baseID = "search-" + newUniqueId();

	let srOnlyClass = hideLabel ? "navds-sr-only" : "";

	let input: HTMLInputElement | undefined;

	const dispatcher = createEventDispatcher<{
		clear: { event: SearchClearEvent };
	}>();

	function handleClearClick(event: MouseEvent) {
		dispatcher("clear", { event: { trigger: "Click", event } });
		value = "";
		input?.focus();
	}

	function handleInputKeypress(event: KeyboardEvent) {
		if (event.key === "Escape" && value == "") {
			dispatcher("clear", { event: { trigger: "Escape", event } });
			value = "";
			input?.focus();
			event.preventDefault();
		}
	}
</script>

<div
	class={classes($$restProps, "navds-form-field", `navds-form-field--${size}`, "navds-search")}
	class:navds-search--error={hasError}
	class:navds-search--disabled={disabled}
>
	<Label for={baseID} {size} class={classes($$restProps, "navds-form-field__label", srOnlyClass)}>
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
				<SearchIcon aria-hidden class="navds-search__search-icon" />
			{/if}
			<!-- svelte-ignore a11y-no-redundant-roles -->
			<input
				bind:this={input}
				bind:value
				type="search"
				role="searchbox"
				class="navds-search__input navds-search__input--{variant} navds-text-field__input navds-body-short navds-body-{size}"
				on:keypress={handleInputKeypress}
				on:change
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

		{#if $$slots.default}
			<slot />
		{:else if variant != "simple"}
			<SearchButton on:click {disabled} {variant} {size} />
		{/if}
	</div>
	<div class="navds-form-field__error" aria-relevant="additions removals" aria-live="polite">
		<!-- {showErrorMsg && (
            <ErrorMessage size={size}>{props.error}</ErrorMessage>
          )} -->
	</div>
</div>
