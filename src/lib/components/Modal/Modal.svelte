<script lang="ts">
	import XMarkIcon from "$lib/icons/XMarkIcon.svelte";
	import { onMount } from "svelte";
	import { writable } from "svelte/store";
	import Button from "../Button/Button.svelte";
	import { classes, omit } from "../helpers";
	import { sizes, type Props } from "./type";

	type $$Props = Props;
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

	/**
	 * Set width of dialog.
	 * @default fit-content (up to 700px)
	 */
	export let width: Props["width"] = undefined;

	/**
	 * Text for close-icon.
	 */
	export let closeIconText = "Close modal";

	let dialog: HTMLDialogElement;

	$: if (dialog && open && dialog.showModal) {
		isModal ? dialog.showModal() : dialog.show();
	}
	$: if (dialog && !open) {
		dialog.close();
	}

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

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
	{...omit($$restProps, "class")}
	bind:this={dialog}
	on:close={() => (open = false)}
	on:click|self={() => dialog.close()}
	class={classes($$restProps, { [`navds-modal--${width}`]: isKnownSize(width) })}
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
				on:click={() => (open = false)}
				><svelte:fragment slot="icon-left"><XMarkIcon title={closeIconText} /></svelte:fragment
				></Button
			>
		{/if}
		<slot name="header" />
	</div>
	<div class="navds-modal__body">
		<!-- Modal content -->
		<slot />
	</div>
	{#if $$slots.footer}
		<div class="navds-modal__footer"><slot name="footer" /></div>
	{/if}
</dialog>
