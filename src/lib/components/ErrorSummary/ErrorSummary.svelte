<script lang="ts" context="module">
	import newUniqueId from "locally-unique-id-generator";
</script>

<script lang="ts">
	import { classes } from "../helpers";
	import BodyShort from "../typography/BodyShort.svelte";
	import Heading from "../typography/Heading.svelte";

	/**
	 * Changes padding and font-sizes
	 */
	export let size: "small" | "medium" = "medium";

	/**
	 * Heading text
	 */
	export let heading: string;

	/**
	 * Allows setting a different HTML h-tag
	 */
	export let headingTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "h2";

	const headingID = "es-" + newUniqueId();
</script>

<section
	{...$$restProps}
	class={classes($$restProps, "navds-error-summary", `navds-error-summary--${size}`)}
	tabIndex={-1}
	aria-live="polite"
	aria-relevant="all"
	aria-labelledby={headingID}
>
	<Heading class="navds-error-summary__heading" as={headingTag} size="small" id={headingID}>
		{heading}
	</Heading>
	<BodyShort as="ul" {size} class="navds-error-summary__list">
		<slot />
	</BodyShort>
</section>
