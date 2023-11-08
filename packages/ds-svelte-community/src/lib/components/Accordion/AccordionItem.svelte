<script lang="ts">
	import ChevronDownIcon from "$lib/icons/ChevronDownIcon.svelte";
	import { omit } from "../helpers";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import Heading from "../typography/Heading/Heading.svelte";
	import { GetAccordionContext } from "./Accordion.svelte";
	import type { ItemProps } from "./type";

	type $$Props = ItemProps;

	/**
	 * Whether the accordion item is open or not.
	 */
	export let open = false;
	/**
	 * Heading of the accordion item.
	 */
	export let heading = "";
	/**
	 * Aria text
	 */
	export let showMoreText = "Show more";

	const ctx = GetAccordionContext();

	const handleClick = () => {
		open = !open;
	};

	if (!$$slots.heading && !heading) {
		console.error(
			"<AccordionItem> was used without content in the 'heading' slot or `heading` prop",
		);
	}

	if (!ctx) {
		console.error("<AccordionItem> was used outside of an <Accordion> component");
	}
</script>

<div
	{...omit($$restProps, "class")}
	class="navds-accordion__item"
	class:navds-accordion__item--open={open}
	class:navds-accordion__item--neutral={$ctx?.variant === "neutral"}
>
	<button class="navds-accordion__header" aria-expanded={open} type="button" on:click={handleClick}>
		<span class="navds-accordion__icon-wrapper">
			<ChevronDownIcon
				class="navds-accordion__header-chevron"
				title={showMoreText}
				aria-hidden="true"
			/>
		</span>
		<Heading size={$ctx?.headingSize} as="span" class="navds-accordion__header-content">
			<!-- Heading. Falls back to `heading` prop if not defined. -->
			<slot name="heading">{heading}</slot>
		</Heading>
	</button>

	<!-- <div transition:slide={{ duration: 300 }}> -->
	<BodyLong
		as="div"
		aria-hidden={open ? undefined : true}
		class="navds-accordion__content{open ? '' : ' navds-accordion__content--closed'}"
	>
		<!-- Content of the accordion -->
		<slot />
	</BodyLong>
	<!-- </div> -->
</div>
