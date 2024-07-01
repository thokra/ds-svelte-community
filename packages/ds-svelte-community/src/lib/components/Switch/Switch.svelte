<!--
@component
Switch is used to quickly change between two states. Often to toggle preferences or settings.

Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/switch).
-->

<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
</script>

<script lang="ts">
	import Loader from "../Loader/Loader.svelte";
	import { classes, omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import Detail from "../typography/Detail/Detail.svelte";
	import SelectedIcon from "./SelectedIcon.svelte";
	import type { Props } from "./type";

	let {
		hideLabel = false,
		loading = false,
		position = "left",
		description = "",
		size = "medium",
		disabled = false,
		checked = $bindable(false),
		deactivateLabel = "Deactivate",
		children,
		...restProps
	}: Props = $props();

	const id = `switch-${newUniqueId()}`;
</script>

<div
	class={classes(restProps, "navds-switch", `navds-switch--${size}`, `navds-switch--${position}`)}
	class:navds-switch--disabled={disabled ?? loading}
	class:navds-switch--loading={loading}
>
	<input
		disabled={disabled || loading}
		bind:checked
		type="checkbox"
		class={classes(restProps, "navds-switch__input")}
		{id}
		{...omit(restProps, "class")}
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
				{@render children()}
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
