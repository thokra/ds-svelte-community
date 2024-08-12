<!--
	@component
	Toggle chip is used for filtering content and data.
 -->

<script lang="ts">
	import XMarkIcon from "$lib/icons/XMarkIcon.svelte";
	import { classes, omit } from "../helpers";
	import type { RemovableProps } from "./type";

	let {
		variant = "action",
		removeLabel = "remove",
		children,
		value,
		ondelete,
		...restProps
	}: RemovableProps = $props();
</script>

<button
	type="button"
	{...omit(restProps, "class")}
	class={classes(
		restProps,
		"navds-chips__chip",
		"navds-chips__removable",
		`navds-chips__removable--${variant}`,
	)}
	class:navds-chips--icon-right={true}
	aria-label={`${value} ${removeLabel}`}
	onclick={(e) => {
		e.preventDefault();
		if (ondelete) {
			ondelete();
		}
		if (restProps && "onclick" in restProps && typeof restProps.onclick === "function") {
			restProps.onclick(e);
		}
	}}
>
	<span class="navds-chips__chip-text">
		{#if children}
			{@render children()}
		{:else}
			{value}
		{/if}
	</span>
	<span class="navds-chips__removable-icon">
		<XMarkIcon aria-hidden />
	</span>
</button>
