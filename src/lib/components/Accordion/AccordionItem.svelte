<script lang="ts">
	import { ChevronDown } from "$lib/icons";
	import { slide } from "svelte/transition";
	import BodyLong from "../typography/BodyLong.svelte";
	import Heading from "../typography/Heading.svelte";
	import { omit } from "../helpers";
	import { GetAccordionContext } from "./Accordion.svelte";

	export let open = false;
	export let heading: string = "";

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
	<button class="navds-accordion__header" type="button" on:click={handleClick} aria-expanded={open}>
		<div class="navds-accordion__icon-wrapper">
			<ChevronDown
				className="navds-accordion__header-chevron"
				aria-label="Show more"
				aria-hidden="true"
			/>
		</div>
		<Heading size={$ctx?.headingSize} as="span" class="navds-accordion__header-content">
			<slot name="heading">{heading}</slot>
		</Heading>
	</button>

	{#if open}
		<div transition:slide={{ duration: 300 }}>
			<BodyLong as="div" class="navds-accordion__content">
				<slot />
			</BodyLong>
		</div>
	{/if}
</div>
