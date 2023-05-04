<script lang="ts">
	import { classes } from "../helpers";
	import DefaultIllustration from "./Illustration.svelte";

	/**
	 * Predefined size properties for illustration
	 * @default "medium"
	 */
	export let size: "small" | "medium" = "medium";
</script>

<div {...$$restProps} class={classes($$restProps, "navds-guide")}>
	<div class="navds-guide__illustration navds-guide__illustration--{size}">
		{#if $$slots.illustration}
			<slot name="illustration" />
		{:else}
			<DefaultIllustration />
		{/if}
	</div>
</div>
