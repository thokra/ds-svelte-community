<!--
	@component
	ErrorSummary gives the user a summary list of validation errors they need to fix before continuing.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/errorsummary).
-->

<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
</script>

<script lang="ts">
	import { classes, omit } from "../helpers";
	import BodyShort from "../typography/BodyShort/BodyShort.svelte";
	import Heading from "../typography/Heading/Heading.svelte";
	import type { Props } from "./type";

	let { size = "medium", heading, headingTag = "h2", children, ...restProps }: Props = $props();

	const headingID = "es-" + newUniqueId();
</script>

<section
	{...omit(restProps, "class")}
	class={classes(restProps, "navds-error-summary", `navds-error-summary--${size}`)}
	tabIndex={-1}
	aria-live="polite"
	aria-relevant="all"
	aria-labelledby={headingID}
>
	<Heading class="navds-error-summary__heading" as={headingTag} size="small" id={headingID}>
		{heading}
	</Heading>
	<BodyShort as="ul" {size} class="navds-error-summary__list">
		{@render children()}
	</BodyShort>
</section>
