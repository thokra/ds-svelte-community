<script lang="ts">
	import Loader from "../Loader/Loader.svelte";
	import { classes, omit } from "../helpers";
	import Label from "../typography/Label.svelte";
	import type { Props } from "./type";

	/**
	 * Changes design and interaction-visuals
	 */
	export let variant: Props["variant"] = "primary";

	/**
	 * Changes padding, height and font-size
	 * @default medium
	 */
	export let size: Props["size"] = "medium";

	/**
	 * Prevent the user from interacting with the button: it cannot be pressed or focused.
	 * @note Avoid using if possible for accessibility purposes
	 */
	export let disabled: Props["disabled"] = false;

	/**
	 * Replaces button content with a Loader component, keeps width
	 * @default false
	 */
	export let loading = false;

	/**
	 * Tag to use for the button
	 */
	export let as: Props["as"] = "button";

	/**
	 * Icon only
	 */
	export let iconOnly = false;

	let el: HTMLButtonElement | HTMLAnchorElement | undefined = undefined;

	type $$Props = Props;

	let overrideWidth = 0;

	$: if (el && loading) {
		overrideWidth = el.getBoundingClientRect().width;
	} else {
		overrideWidth = 0;
	}
</script>

<svelte:element
	this={as}
	{...omit(disabled ? omit($$restProps, "href", "class") : $$restProps, "class")}
	style={overrideWidth ? `width: ${overrideWidth}px` : undefined}
	class={classes($$restProps, "navds-button", `navds-button--${variant}`, `navds-button--${size}`)}
	class:navds-button--loading={loading}
	class:navds-button--disabled={disabled || overrideWidth > 0}
	class:navds-button--icon-only={iconOnly ||
		(($$slots["icon-left"] || $$slots["icon-right"]) && !$$slots.default)}
	class:unstyled={as === "a"}
	bind:this={el}
	on:click
	on:mouseenter
	on:mouseleave
	role={as != "button" ? "button" : undefined}
	disabled={disabled || overrideWidth > 0 ? true : undefined}
>
	{#if overrideWidth}
		<Loader {size} />
	{:else}
		{#if $$slots["icon-left"]}
			<!-- Place icon to the left of the content -->
			<span class="navds-button__icon"><slot name="icon-left" /></span>
		{/if}
		{#if $$slots.default && !iconOnly}
			<Label as="span" size={size === "medium" ? "medium" : "small"}>
				<!-- button content -->
				<slot />
			</Label>
		{/if}
		{#if $$slots["icon-right"]}
			<!-- Place icon to the right of the content -->
			<span class="navds-button__icon"><slot name="icon-right" /></span>
		{/if}
	{/if}
</svelte:element>
