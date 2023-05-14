<script lang="ts">
	import ChevronRight from "$lib/icons/ChevronRight.svelte";
	import type { HTMLAnchorAttributes, SvelteHTMLElements } from "svelte/elements";
	import Panel from "../Panel.svelte";
	import { classes, omit } from "../helpers";

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
	class={classes($$restProps, "unstyled", "navds-link-panel")}
>
	<div class="navds-link-panel__content">
		<slot />
	</div>
	<ChevronRight class="navds-link-panel__chevron" aria-hidden />
</Panel>
