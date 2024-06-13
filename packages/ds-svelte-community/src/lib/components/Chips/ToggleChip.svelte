<!--
	@component
	Removable chip shows selected values that the user can remove.
 -->

<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { ToggleProps } from "./type";

	let {
		selected = $bindable(false),
		value,
		variant = "action",
		checkmark = true,
		as = "button",
		children,
		...restProps
	}: ToggleProps = $props();
</script>

<!-- Called when the user clicks the toggle -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element
	this={as}
	{...omit(restProps, "class")}
	class={classes(
		restProps,
		"navds-chips__chip",
		"navds-chips__toggle",
		`navds-chips__toggle--${variant}`,
	)}
	class:unstyled={as == "a"}
	class:navds-chips__toggle--with-checkmark={checkmark}
	aria-pressed={selected}
	onclick={as == "a"
		? undefined
		: (e: MouseEvent) => {
				selected = !selected;
				if (restProps && "onclick" in restProps && typeof restProps.onclick === "function") {
					restProps.onclick(e);
				}
			}}
>
	{#if checkmark}
		<svg
			aria-hidden="true"
			class="navds-chips__toggle-icon"
			width="1.25em"
			height="1.25em"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			focusable="false"
			role="img"
		>
			{#if selected}
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M10 18.125C14.4873 18.125 18.125 14.4873 18.125 10C18.125 5.51269 14.4873 1.875 10 1.875C5.51269 1.875 1.875 5.51269 1.875 10C1.875 14.4873 5.51269 18.125 10 18.125ZM14.128 7.72904C14.3695 7.44357 14.3339 7.01635 14.0485 6.7748C13.763 6.53326 13.3358 6.56886 13.0942 6.85432L8.60428 12.1606L6.41627 9.97263C6.15185 9.70822 5.72315 9.70822 5.45873 9.97263C5.19431 10.2371 5.19431 10.6658 5.45873 10.9302L8.16706 13.6385C8.30095 13.7724 8.48479 13.8441 8.67397 13.8362C8.86316 13.8284 9.0404 13.7416 9.16271 13.5971L14.128 7.72904Z"
					fill="currentColor"
				/>
			{:else}
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125ZM1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10Z"
					fill="var(--ac-chip-toggle-circle-border, var(--a-border-default))"
				/>
			{/if}
		</svg>
	{/if}

	<!-- Content of the ToggleChip. Falls back to `value` prop if no content. -->
	<span class="navds-chips__chip-text">
		{#if children}
			{@render children()}
		{:else}
			{value}
		{/if}
	</span>
</svelte:element>
