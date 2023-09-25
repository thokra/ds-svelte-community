<script lang="ts">
	import { classes, omit } from "../../helpers";
	import type { LinkProps } from "./type";

	export let href: string;

	/**
	 * Variant of the component to use.
	 */
	export let variant: LinkProps["variant"] = "action";
	/**
	 * Inverts when the underline appears. If this is false,
	 * the underline does not appear by default, but does appear when the link is hovered.
	 * This makes it more suitable for use when inlined in text.
	 */
	export let underline: LinkProps["underline"] = true;

	/**
	 * Renders link with `display: inline` for better wrapping in text.
	 */
	export let inlineText: LinkProps["inlineText"] = false;

	export let as: LinkProps["as"] = "a";

	type $$Props = LinkProps;
</script>

{#if as == "a"}
	<a
		{...omit($$restProps, "class", "href")}
		{href}
		class={classes($$restProps, "navds-link", "navds-link--" + variant)}
		class:navds-link--inline-text={inlineText}
		class:navds-link--remove-underline={!underline}
	>
		<slot />
	</a>
{:else}
	<svelte:element
		this={as}
		{...omit({ ...$$restProps, href }, "class")}
		class={classes($$restProps, "navds-link", "navds-link--" + variant)}
		class:navds-link--inline-text={inlineText}
		class:navds-link--remove-underline={!underline}
	>
		<slot />
	</svelte:element>
{/if}
