<script lang="ts">
	import ChevronDownIcon from "$lib/icons/ChevronDownIcon.svelte";
	import { omit } from "../helpers";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import Heading from "../typography/Heading/Heading.svelte";
	import { GetAccordionContext } from "./Accordion.svelte";
	import type { ItemProps } from "./type";

	let { open = false, heading, children, ...restProps }: ItemProps = $props();

	const ctx = GetAccordionContext();

	const handleClick = () => {
		open = !open;
	};

	if (!heading) {
		console.error("<AccordionItem> was used without a 'heading' snippet or `heading` prop");
	}

	if (!ctx) {
		console.error("<AccordionItem> was used outside of an <Accordion> component");
	}
</script>

<div
	{...omit(restProps, "class")}
	class="navds-accordion__item"
	class:navds-accordion__item--open={open}
	class:navds-accordion__item--neutral={ctx?.variant === "neutral"}
>
	<button class="navds-accordion__header" aria-expanded={open} type="button" onclick={handleClick}>
		<span class="navds-accordion__icon-wrapper">
			<ChevronDownIcon class="navds-accordion__header-chevron" aria-hidden="true" />
		</span>
		<Heading size={ctx?.headingSize} as="span" class="navds-accordion__header-content">
			{#if typeof heading === "string"}
				{heading}
			{:else if heading}
				{@render heading()}
			{/if}
		</Heading>
	</button>

	<!-- <div transition:slide={{ duration: 300 }}> -->
	<BodyLong
		as="div"
		aria-hidden={open ? undefined : true}
		class="navds-accordion__content{open ? '' : ' navds-accordion__content--closed'}"
	>
		{@render children()}
	</BodyLong>
	<!-- </div> -->
</div>
