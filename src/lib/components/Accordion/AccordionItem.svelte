<script lang="ts">
	import { ChevronDownCircle, ChevronDown } from "$lib/icons";
	import { slide } from "svelte/transition";
	import BodyLong from "../typography/BodyLong.svelte";
	import Heading from "../typography/Heading.svelte";

	export let open = false;

	const handleClick = () => {
		open = !open;
	};
</script>

<div class="navds-accordion__item" class:navds-accordion__item--open={open}>
	<button class="navds-accordion__header" type="button" on:click={handleClick} aria-expanded={open}>
		<Heading size="small" as="span" class="navds-accordion__header-content">
			<slot name="heading" />
		</Heading>
		<ChevronDown aria-hidden class="navds-accordion__expand-icon" />
		<ChevronDownCircle
			aria-hidden
			class="navds-accordion__expand-icon navds-accordion__expand-icon--filled"
		/>
	</button>

	{#if open}
		<div transition:slide={{ duration: 300 }}>
			<BodyLong as="div" class="navds-accordion__content">
				<slot />
			</BodyLong>
		</div>
	{/if}
</div>
