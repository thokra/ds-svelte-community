<!--
	@component

	Allow users to copy text to clipboard.

	**Note:**
	This differs from the `@navikt/ds-react` implementation in that it uses the `navigator.clipboard` API instead of the `document.execCommand("copy")` API.
	This is to simplify code and support up-to-date browsers only. If you support IE or older browsers, reach out.
 -->

<script lang="ts">
	import CheckmarkIcon from "$lib/icons/CheckmarkIcon.svelte";
	import FilesIcon from "$lib/icons/FilesIcon.svelte";
	import { onDestroy } from "svelte";
	import { classes, omit } from "../helpers";
	import { Label } from "../typography";
	import type { Props } from "./type";

	let {
		size = "medium",
		variant = "neutral",
		copyText,
		text = "",
		activeText = "",
		activeDuration = 2000,
		title = "Copy",
		activeTitle = "Copied",
		activeChanged,
		icon,
		...restProps
	}: Props = $props();

	let active = $state(false);
	let timeout: ReturnType<typeof setTimeout> | null = null;

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

		activeChanged && activeChanged(active);

		timeout = setTimeout(() => {
			active = false;
			activeChanged && activeChanged(active);

			timeout = null;
		}, activeDuration);
	};
</script>

<button
	{...omit(restProps, "class")}
	type="button"
	aria-live="polite"
	class={classes(
		restProps,
		"navds-copybutton",
		`navds-copybutton--${size}`,
		`navds-copybutton--${variant}`,
	)}
	class:navds-copybutton--icon-only={!text}
	class:navds-copybutton--active={active}
	onclick={handleClick}
>
	<span class="navds-copybutton__content">
		<span class="navds-copybutton__icon">
			{#if icon}
				{@render icon(active)}
			{:else if active}
				<CheckmarkIcon aria-hidden={!!text} title={text ? undefined : activeTitle} />
			{:else}
				<FilesIcon aria-hidden={!!text} title={text ? undefined : title} />
			{/if}
		</span>

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
