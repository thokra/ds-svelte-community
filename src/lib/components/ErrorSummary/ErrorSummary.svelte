<script lang="ts" context="module">
	import newUniqueId from "locally-unique-id-generator";
</script>

<script lang="ts">
	import { classes, omit } from "../helpers";
	import BodyShort from "../typography/BodyShort.svelte";
	import Heading from "../typography/Heading.svelte";
	import type { Props, headingTags, sizes } from "./type";

	type $$Props = Props;

	/**
	 * Changes padding and font-sizes.
	 */
	export let size: (typeof sizes)[number] = "medium";

	/**
	 * Heading text.
	 */
	export let heading: string;

	/**
	 * Allows setting a different HTML h-tag.
	 */
	export let headingTag: (typeof headingTags)[number] = "h2";

	const headingID = "es-" + newUniqueId();
</script>

<section
	{...omit($$restProps, "class")}
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
