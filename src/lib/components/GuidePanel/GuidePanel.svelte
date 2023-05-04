<script lang="ts">
	import { classes } from "../helpers";
	import Guide from "./Guide.svelte";

	/**
	 * Poster positions guide-illustration above content
	 */
	export let poster = false;
</script>

<div
	{...$$restProps}
	class={classes($$restProps, "navds-guide-panel")}
	class:navds-guide-panel--poster={poster}
>
	<!-- Hack until something like https://github.com/sveltejs/svelte/pull/8304 is released -->
	{#if $$slots.illustration}
		<Guide size={poster ? "medium" : "small"}>
			<slot name="illustration" slot="illustration" />
		</Guide>
	{:else}
		<Guide size={poster ? "medium" : "small"} />
	{/if}
	<div class="navds-guide-panel__content">
		<slot />
	</div>
</div>
