<script lang="ts">
	import ChevronRight from "$lib/icons/ChevronRight.svelte";
	import Panel from "../Panel/Panel.svelte";
	import { classes, omit } from "../helpers";
	import type { Props } from "./type";

	type $$Props = Props;

	/**
	 * Adds border to panel if true.
	 */
	export let border = true;
	/**
	 * HTML element to render as.
	 */
	// export let as: keyof SvelteHTMLElements = "a";
	/**
	 * Link to navigate to.
	 */
	export let href: string;
</script>

<Panel
	{...omit($$restProps, "class")}
	as="a"
	{border}
	{href}
	class={classes($$restProps, "unstyled", "navds-link-panel")}
>
	<div class="navds-link-panel__content">
		<!-- Panel content -->
		<slot />
	</div>
	<ChevronRight class="navds-link-panel__chevron" aria-hidden focusable="false" role="img" />
</Panel>
