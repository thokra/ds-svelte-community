<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
</script>

<script lang="ts">
	import Loader from "../Loader/Loader.svelte";
	import { classes } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import Detail from "../typography/Detail/Detail.svelte";
	import SelectedIcon from "./SelectedIcon.svelte";

	/**
	 * If enabled shows the label and description for screenreaders only.
	 */
	export let hideLabel = false;
	/**
	 * Toggles loading state with loader-component on switch.
	 */
	export let loading = false;
	/**
	 * Positions switch on left/right side of label.
	 * @default "left"
	 */
	export let position: "left" | "right" = "left";
	/**
	 * Adds a description to extend labling of Switch.
	 */
	export let description = "";

	/**
	 * Changes font-size, padding and gaps.
	 */
	export let size: "medium" | "small" = "medium";

	/**
	 * Disables element.
	 * @note Avoid using if possible for accessibility purposes.
	 */
	export let disabled = false;

	/**
	 * Checked state.
	 */
	export let checked = false;

	export let deactivateLabel = "Deactivate";

	const id = `switch-${newUniqueId()}`;
</script>

<div
	class={classes($$restProps, "navds-switch", `navds-switch--${size}`, `navds-switch--${position}`)}
	class:navds-switch--disabled={disabled ?? loading}
	class:navds-switch--loading={loading}
>
	<input
		disabled={disabled || loading}
		bind:checked
		type="checkbox"
		class={classes($$restProps, "navds-switch__input")}
		{id}
		on:click
		on:change
		on:mousedown
		on:beforeinput
	/>
	<span class="navds-switch__track">
		<span class="navds-switch__thumb">
			{#if loading}
				<Loader size="xsmall" aria-live="polite" />
			{:else if checked}
				<SelectedIcon label={deactivateLabel} />
			{/if}
		</span>
	</span>
	<label for={id} class="navds-switch__label-wrapper">
		<div
			class="navds-switch__content"
			class:navds-sr-only={hideLabel}
			class:navds-switch--with-description={!!description && !hideLabel}
		>
			<BodyShort as="div" {size} class="navds-switch__label">
				<slot />
			</BodyShort>

			{#if description}
				{#if size == "medium"}
					<BodyShort as="div" size="small" class="navds-switch__description">
						{description}
					</BodyShort>
				{:else}
					<Detail as="div" size="small" class="navds-switch__description">
						{description}
					</Detail>
				{/if}
			{/if}
		</div>
	</label>
</div>
