<script lang="ts">
	import { classes, omit } from "../helpers";
	import DefaultIllustration from "./Illustration.svelte";
	import type { GuideProps, sizes } from "./type";

	type $$Props = GuideProps;

	/**
	 * Predefined size properties for illustration
	 */
	export let size: (typeof sizes)[number] = "medium";
</script>

<div {...omit($$restProps, "class")} class={classes($$restProps, "navds-guide")}>
	<div class="navds-guide__illustration navds-guide__illustration--{size}">
		<!-- Custom illustration -->
		<slot name="illustration">
			<DefaultIllustration />
		</slot>
	</div>
</div>
