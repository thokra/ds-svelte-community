<script lang="ts">
	import { classes, omit } from "../helpers";
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

	/**
	 * Reference to the root element
	 */
	export let ref: Props["ref"] = null;

	type $$Props = Props;

	let overrideWidth = 0;

	$: if (ref && loading) {
		overrideWidth = ref.getBoundingClientRect().width;
	} else {
		overrideWidth = 0;
	}
</script>

<!--
@component
Here's some documentation for this component.
It will show up on hover.

- You can use markdown here.
- You can also use code blocks here.
- Usage:
  ```tsx
  <Button name="Arethra">
		```
-->

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
	bind:this={ref}
	on:click
	on:mouseenter
	on:mouseleave
	role={as != "button" ? "button" : undefined}
	disabled={disabled || overrideWidth > 0 ? true : undefined}
>
	{#if overrideWidth}
		Loading
	{:else}
		{#if $$slots["icon-left"]}
			<span class="navds-button__icon">
				<!-- Place icon to the left of the content -->
				<slot name="icon-left" />
			</span>
		{/if}
		{#if $$slots.default && !iconOnly}
			<span>
				<!-- button content -->
				<slot />
			</span>
		{/if}
		{#if $$slots["icon-right"]}
			<!-- Place icon to the right of the content -->
			<span class="navds-button__icon"><slot name="icon-right" /></span>
		{/if}
	{/if}
</svelte:element>
