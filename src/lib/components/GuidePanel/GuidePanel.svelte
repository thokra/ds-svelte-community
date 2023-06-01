<script lang="ts">
	import { classes, omit } from "../helpers";
	import Guide from "./Guide.svelte";
	import type { Props } from "./type";

	type $$Props = Props;

	/**
	 * Poster positions guide-illustration above content.
	 */
	export let poster = false;
</script>

<div
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-guide-panel")}
	class:navds-guide-panel--poster={poster}
>
	<!-- Hack until something like https://github.com/sveltejs/svelte/pull/8304 is released -->
	{#if $$slots.illustration}
		<Guide size={poster ? "medium" : "small"}>
			<!-- Custom illustration -->
			<slot name="illustration" slot="illustration" />
		</Guide>
	{:else}
		<Guide size={poster ? "medium" : "small"} />
	{/if}
	<div class="navds-guide-panel__content">
		<!-- Content -->
		<slot />
	</div>
</div>
