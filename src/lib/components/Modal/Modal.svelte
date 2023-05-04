<script lang="ts">
	import "@navikt/ds-css/modal.css";

	import { browser } from "$app/environment";
	import type { HTMLDialogAttributes } from "svelte/elements";
	import { classes, omit } from "../helpers";
	import Button from "../Button.svelte";
	import XMark from "$lib/icons/XMark.svelte";

	export let open: boolean;
	export let isModal = true;
	export let closeButton = true;

	let dialog: HTMLDialogElement;

	$: if (dialog && open) isModal ? dialog.showModal() : dialog.show();
	$: if (dialog && !open) dialog.close();

	$: {
		if (browser) {
			if (dialog && open) {
				window.document.getElementsByTagName("body")[0].style.overflow = "hidden";
			} else {
				window.document.getElementsByTagName("body")[0].style.overflow = "auto";
			}
		}
	}

	interface $$Props extends HTMLDialogAttributes {
		open: boolean;
		isModal?: boolean;
		closeButton?: boolean;
	}
</script>

<dialog
	{...omit($$restProps, "class")}
	bind:this={dialog}
	on:close={() => (open = false)}
	on:mousedown|self={() => dialog.close()}
	class={classes($$restProps)}
	class:navds-modal={open}
>
	{#if open}
		<div class="navds-modal__content">
			<slot />
		</div>
	{/if}
	{#if closeButton}
		<Button
			class={classes({}, "navds-modal__button", {
				"navds-modal__button--shake": isModal,
			})}
			on:click={() => (open = false)}
			size="small"
			variant="tertiary"
			><svelte:fragment slot="icon-left"><XMark aria-label="Close modal" /></svelte:fragment
			></Button
		>
	{/if}
</dialog>

<style>
	dialog::backdrop {
		z-index: var(--a-z-index-modal);
		background-color: var(--ac-modal-backdrop, var(--a-surface-backdrop, rgba(0, 0, 0, 0.65)));
	}
</style>
