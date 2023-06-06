<script lang="ts">
	import XMark from "$lib/icons/XMark.svelte";
	import { onMount } from "svelte";
	import type { HTMLDialogAttributes } from "svelte/elements";
	import { writable } from "svelte/store";
	import Button from "../Button/Button.svelte";
	import { classes, omit } from "../helpers";

	interface $$Props extends HTMLDialogAttributes {
		open: boolean;
		isModal?: boolean;
		closeButton?: boolean;
	}

	/**
	 * Set open to `true` to open the dialog. Set to `false` to close it.
	 * Recommended to use with `bind:open`.
	 */
	export let open: boolean;

	/**
	 * Removes close-button(X) when false.
	 */
	export let closeButton = true;

	/**
	 * Set to `true` to make the dialog modal.
	 */
	export let isModal = true;

	let dialog: HTMLDialogElement;

	$: if (dialog && open) isModal ? dialog.showModal() : dialog.show();
	$: if (dialog && !open) dialog.close();

	const openStore = writable(open);
	$: openStore.set(open);
	onMount(() => {
		return openStore.subscribe((value) => {
			if (dialog && value) {
				window.document.getElementsByTagName("body")[0].style.overflow = "hidden";
			} else {
				window.document.getElementsByTagName("body")[0].style.overflow = "auto";
			}
		});
	});
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
			<!-- Modal content -->
			<slot />
		</div>
	{/if}
	{#if closeButton}
		<Button
			class={classes({}, "navds-modal__button", "navds-modal__button--shake")}
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
