<script lang="ts">
	import ChevronLeftIcon from "$lib/icons/ChevronLeftIcon.svelte";
	import ChevronRightIcon from "$lib/icons/ChevronRightIcon.svelte";
	import { onMount } from "svelte";
	import { classes, omit } from "../helpers";
	import type { TabListProps } from "./type.svelte";

	let { children, ...restProps }: TabListProps = $props();

	let tabList: HTMLElement;
	let showStepperLeft = $state(false);
	let showStepperRight = $state(false);
	let showSteppers = $state(false);

	const updateSteppers = () => {
		if (!tabList) {
			return;
		}

		const { scrollWidth, clientWidth, scrollLeft } = tabList;

		// use 1 for the potential rounding error with browser zooms.
		showStepperLeft = scrollLeft > 1;
		showStepperRight = scrollLeft < scrollWidth - clientWidth - 1;

		showSteppers = showStepperLeft || showStepperRight;
	};

	$effect(updateSteppers);

	onMount(() => {
		const resizeObserver = new ResizeObserver(updateSteppers);

		resizeObserver.observe(tabList);
		updateSteppers();

		return () => {
			resizeObserver.disconnect();
		};
	});

	const scroll = async (right: boolean) => {
		if (right) {
			tabList.scrollLeft += 100;
		} else {
			tabList.scrollLeft -= 100;
		}
	};
</script>

<div class="navds-tabs__tablist-wrapper">
	{#if showSteppers}
		<!-- Is it OK to use aria-hidden when we have other keyboard actions? -->
		<div
			class="navds-tabs__scroll-button"
			class:navds-tabs__scroll-button--hidden={!showStepperLeft}
			aria-hidden="true"
			onclick={() => {
				scroll(false);
			}}
		>
			<ChevronLeftIcon />
		</div>
	{/if}
	<div
		bind:this={tabList}
		onscroll={() => {
			updateSteppers();
		}}
		{...omit(restProps, "class", "role", "aria-orientation")}
		class={classes(restProps, "navds-tabs__tablist")}
		data-orientation="horizontal"
		role="tablist"
		aria-orientation="horizontal"
		style="outline: none;"
		tabindex="0"
	>
		{@render children()}
	</div>
	{#if showSteppers}
		<div
			class="navds-tabs__scroll-button"
			class:navds-tabs__scroll-button--hidden={!showStepperRight}
			aria-hidden="true"
			onclick={() => {
				scroll(true);
			}}
		>
			<ChevronRightIcon />
		</div>
	{/if}
</div>
