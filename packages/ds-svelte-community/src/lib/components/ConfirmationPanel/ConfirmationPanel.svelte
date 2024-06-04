<!--
	@component

	Used to give active consent either at the beginning or end of a flow.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/confirmationpanel).
 -->

<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
</script>

<script lang="ts">
	import { Checkbox } from "../Checkbox";
	import { classes, omit } from "../helpers";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import ErrorMessage from "../typography/ErrorMessage/ErrorMessage.svelte";
	import type { Props } from "./type";

	let {
		error = "",
		errorId = "",
		size = "medium",
		value = "",
		id = "",
		checked = false,
		children,
		label,
		...restProps
	}: Props = $props();

	let uid = $derived(id || "confirmation-panel-" + newUniqueId());
</script>

<div
	{...omit(restProps, "class")}
	class={classes(restProps, "navds-confirmation-panel", "navds-form-field")}
	class:navds-confirmation-panel--small={size === "small"}
	class:navds-confirmation-panel--error={error != ""}
	class:navds-confirmation-panel--checked={!!checked}
>
	<div class="navds-confirmation-panel__inner">
		{#if children}
			<BodyLong {size} class="navds-confirmation-panel__content" id={uid} as="div">
				<!-- Description -->
				{@render children()}
			</BodyLong>
		{/if}
		<Checkbox bind:checked {value} error={!!error} {size} aria-describedby={uid}>
			{#if typeof label === "string"}
				{label}
			{:else}
				{@render label()}
			{/if}
		</Checkbox>
	</div>
	<div class="navds-form-field__error" id={errorId} role="alert">
		{#if !!error}
			<ErrorMessage {size}>{error}</ErrorMessage>
		{/if}
	</div>
</div>
