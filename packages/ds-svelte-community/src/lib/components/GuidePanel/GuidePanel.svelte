<!--
	@component
	GuidePanel is used to give a friendly welcome and introduction to the user.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/guidepanel).
-->

<script lang="ts">
	import { classes, omit } from "../helpers";
	import Illustration from "./GuidePanelIllustration.svelte";
	import type { Props } from "./type";

	let { poster, illustration, children, ...restProps }: Props = $props();
</script>

<div
	{...omit(restProps, "class")}
	class={classes(restProps, "navds-guide-panel")}
	class:navds-guide-panel--poster={poster === true}
	class:navds-guide-panel--not-poster={poster === false}
	class:navds-guide-panel--responsive-poster={poster === undefined}
>
	<div class="navds-guide">
		{#if illustration}
			{@render illustration()}
		{:else}
			<Illustration />
		{/if}
	</div>
	<div class="navds-guide-panel__content">
		{@render children()}
	</div>
</div>
