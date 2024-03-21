<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import type { PageProps } from "./type";

	type $$Props = PageProps;

	/**
	 * Overrides html-tag
	 * @default "div"
	 */
	export let as: PageProps["as"] = "div";
	/**
	 * Background color. Accepts a color token.
	 * @default bg-default
	 */
	export let background: PageProps["background"] = "bg-default";
	/**
	 * Places footer below page-fold
	 */
	export let footerPosition: PageProps["footerPosition"] = undefined;
	/**
	 * Adds a standardised padding of 4rem between content and footer
	 * @default end
	 */
	export let contentBlockPadding: PageProps["contentBlockPadding"] = "end";

	$: belowFold = footerPosition === "belowFold";

	$: console.log("ASDF", background);
</script>

<svelte:element
	this={as}
	{...omit($$restProps, "class", "style")}
	class={classes($$restProps, "navds-page")}
	style={`--__ac-page-background: var(--a-${background}) ${$$restProps.style || ""}`}
>
	<div
		class={classes(
			{},
			{
				"navds-page__content--fullheight": belowFold,
				"navds-page__content--grow": !belowFold,
				"navds-page__content--padding": contentBlockPadding === "end",
			},
		)}
	>
		<slot />
	</div>
	<slot name="footer" />
</svelte:element>
