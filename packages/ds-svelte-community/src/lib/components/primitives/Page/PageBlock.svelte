<script lang="ts">
	import { classes, omit } from "$lib/components/helpers";
	import type { PageBlockProps } from "./type";

	type $$Props = PageBlockProps;

	/**
	 * Overrides html-tag
	 * @default "div"
	 */
	export let as: PageBlockProps["as"] = "div";
	/**
	 * Predefined max-width
	 * @example
	 * text: 576px + dynamic gutters
	 * md:   768px
	 * lg:   1024px
	 * xl:   1280px
	 * 2xl:  1440px
	 * @default max-width: 100%;
	 */
	export let width: PageBlockProps["width"] = undefined;
	/**
	 * Adds a standardised responsive padding-inline
	 * @example
	 * 3rem on > md
	 * 1rem on < md
	 * @default false
	 */
	export let gutters: PageBlockProps["gutters"] = false;
</script>

<svelte:element
	this={as}
	{...omit($$restProps, "class", "style")}
	class={classes($$restProps, "navds-pageblock", `navds-pageblock--${width}`, {
		"navds-pageblock--gutters": !!gutters,
	})}
>
	<slot />
</svelte:element>
