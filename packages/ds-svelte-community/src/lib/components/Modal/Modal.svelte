<!--
	@component
	Modals are useful tools when you have critical information a user needs to take a stance on.

	**Note**: This component differs from the `@navikt/ds-react` component in that it uses the `dialog` element instead of custom markup.
	This reduces the amount of properties available. If this doesn't work for you, reach out.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/modal).
-->

<script lang="ts">
	import XMarkIcon from "$lib/icons/XMarkIcon.svelte";
	import { onMount } from "svelte";
	import { writable } from "svelte/store";
	import Button from "../Button/Button.svelte";
	import { classes, omit } from "../helpers";
	import Heading from "../typography/Heading/Heading.svelte";
	import { sizes, type Props } from "./type";

	let {
		open = $bindable(false),
		closeButton = true,
		isModal = true,
		width = undefined,
		closeIconText = "Close modal",
		header,
		children,
		footer,
		...restProps
	}: Props = $props();

	let dialog: HTMLDialogElement;

	$effect(() => {
		if (dialog && open && dialog.showModal) {
			isModal ? dialog.showModal() : dialog.show();
		}
	});
	$effect(() => {
		if (dialog && !open) {
			dialog.close();
		}
	});

	const openStore = writable(open);
	$effect(() => {
		openStore.set(open);
	});
	onMount(() => {
		return openStore.subscribe((value) => {
			if (dialog && value) {
				window.document.getElementsByTagName("body")[0].style.overflow = "hidden";
			} else {
				window.document.getElementsByTagName("body")[0].style.overflow = "auto";
			}
		});
	});

	const isKnownSize = (w: unknown) => (w ? sizes.includes(w as never) : false);
	function styles(w: Props["width"]): string | undefined {
		if (typeof w === "number") {
			return `width: ${w}px`;
		}

		if (typeof w === "string") {
			return !isKnownSize(w) ? `width: ${w}` : w;
		}

		return undefined;
	}
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog
	{...omit(restProps, "class")}
	bind:this={dialog}
	onclose={() => (open = false)}
	onclick={(e) => {
		if (e.target === dialog) {
			dialog.close();
		}
	}}
	class={classes(restProps, { [`navds-modal--${width}`]: isKnownSize(width) })}
	class:navds-modal={open}
	class:navds-modal--autowidth={!width}
	style={styles(width)}
>
	<div class="navds-modal__header">
		{#if closeButton}
			<Button
				type="button"
				class="navds-modal__button"
				size="small"
				variant="tertiary-neutral"
				onclick={() => (open = false)}
			>
				{#snippet iconLeft()}
					<XMarkIcon title={closeIconText} />
				{/snippet}
			</Button>
		{/if}

		{#if header}
			{#if typeof header === "string"}
				<Heading level="1" size="large">{header}</Heading>
			{:else}
				{@render header()}
			{/if}
		{/if}
	</div>
	<div class="navds-modal__body">
		{@render children()}
	</div>
	{#if footer}
		<div class="navds-modal__footer">
			{@render footer()}
		</div>
	{/if}
</dialog>
