<script lang="ts">
	import type { HTMLAnchorAttributes, SvelteHTMLElements } from "svelte/elements";
	import { classes, omit } from "../helpers";
	import Panel from "../Panel.svelte";
	import ChevronRight from "$lib/icons/ChevronRight.svelte";

	export let border = true;
	export let as: keyof SvelteHTMLElements = "a";
	export let href: string;

	interface $$Props extends HTMLAnchorAttributes {
		as: keyof SvelteHTMLElements;
		href: string;
		border: boolean;
	}
</script>

<Panel
	{...omit($$restProps, "class")}
	{as}
	{border}
	{href}
	class={classes($$restProps, "navds-link-panel")}
>
	<div class="navds-link-panel__content">
		<slot />
	</div>
	<ChevronRight class="navds-link-panel__chevron" aria-hidden />
</Panel>
