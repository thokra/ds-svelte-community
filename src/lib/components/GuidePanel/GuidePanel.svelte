<script lang="ts">
	import { classes, omit } from "../helpers";
	import Illustration from "./Illustration.svelte";
	import type { Props } from "./type";

	type $$Props = Props;

	/**
	 * Render illustation above content
	 * @default true on mobile (<480px)
	 */
	export let poster: boolean | undefined = undefined;
</script>

<div
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-guide-panel")}
	class:navds-guide-panel--poster={poster === true}
	class:navds-guide-panel--not-poster={poster === false}
	class:navds-guide-panel--responsive-poster={poster === undefined}
>
	<div class="navds-guide">
		<!-- Hack until something like https://github.com/sveltejs/svelte/pull/8304 is released -->
		{#if $$slots.illustration}
			<!-- Custom illustration -->
			<slot name="illustration" />
		{:else}
			<Illustration />
		{/if}
	</div>
	<div class="navds-guide-panel__content">
		<!-- Content -->
		<slot />
	</div>
</div>
