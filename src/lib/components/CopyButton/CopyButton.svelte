<script lang="ts">
	import Checkmark from "$lib/icons/Checkmark.svelte";
	import Files from "$lib/icons/Files.svelte";
	import { createEventDispatcher, onDestroy } from "svelte";
	import { classes, omit } from "../helpers";
	import { Label } from "../typography";
	import type { Props, sizes, variants } from "./type";

	type $$Props = Props;

	export let size: (typeof sizes)[number] = "medium";
	export let variant: (typeof variants)[number] = "neutral";
	/**
	 * Text to copy to clipboard.
	 */
	export let copyText: string;
	/**
	 *  Optional text in button.
	 */
	export let text = "";
	/**
	 * Text shown when button is clicked.
	 * Only set if used with 'text'-prop.
	 */
	export let activeText = "";
	/**
	 * Timeout duration in milliseconds.
	 */
	export let activeDuration = 2000;
	/**
	 * Accessible label for icon (ignored if text is set).
	 */
	export let title = "Copy";
	/**
	 * Accessible label for icon in active-state (ignored if text is set).
	 */
	export let activeTitle = "Copied";

	let active = false;
	let timeout: ReturnType<typeof setTimeout> | null = null;

	const dispatch = createEventDispatcher<{
		activeChange: boolean;
	}>();

	onDestroy(() => {
		if (timeout) {
			clearTimeout(timeout);
		}
	});

	const handleClick = () => {
		if (timeout) {
			clearTimeout(timeout);
		}
		navigator.clipboard.writeText(copyText);
		active = true;

		/**
		 *  Called whenever the active-state changes
		 */
		dispatch("activeChange", active);

		timeout = setTimeout(() => {
			active = false;
			dispatch("activeChange", active);

			timeout = null;
		}, activeDuration);
	};
</script>

<button
	{...omit($$restProps, "class")}
	type="button"
	aria-live="polite"
	class={classes(
		$$restProps,
		"navds-copybutton",
		`navds-copybutton--${size}`,
		`navds-copybutton--${variant}`,
	)}
	class:navds-copybutton--icon-only={!text}
	class:navds-copybutton--active={active}
	on:click={handleClick}
>
	<span class="navds-copybutton__content">
		{#if active}
			<span class="navds-copybutton__icon">
				<!-- Icon when button has been clicked. Defaults to `<Checkmark />` icon. -->
				<slot name="active-icon">
					<Checkmark
						aria-hidden={!!text}
						aria-label={text ? undefined : activeTitle}
						focusable="false"
						role="img"
					/>
				</slot>
			</span>
		{:else}
			<span class="navds-copybutton__icon">
				<!-- Icon for the button. Defaults to `<Files />` icon. -->
				<slot name="icon">
					<Files
						aria-hidden={!!text}
						aria-label={text ? undefined : title}
						focusable="false"
						role="img"
					/>
				</slot>
			</span>
		{/if}

		{#if text}
			{#if active}
				<Label as="span" size={size === "medium" ? "medium" : "small"} aria-live="polite">
					{activeText}
				</Label>
			{:else}
				<Label as="span" size={size === "medium" ? "medium" : "small"} aria-live="polite">
					{text}
				</Label>
			{/if}
		{/if}
	</span>
</button>
