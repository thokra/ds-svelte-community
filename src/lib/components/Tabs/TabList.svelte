<script lang="ts">
	import ChevronLeftIcon from "$lib/icons/ChevronLeftIcon.svelte";
	import ChevronRightIcon from "$lib/icons/ChevronRightIcon.svelte";
	import { onMount } from "svelte";
	import { classes, omit } from "../helpers";
	import type { TabListProps } from "./type";

	type $$Props = TabListProps;

	let width: number | undefined;
	let tabList: HTMLElement;

	let showStepperLeft = false;
	let showStepperRight = false;
	let showSteppers = false;

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

	$: width && updateSteppers();

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
			on:click={() => {
				scroll(false);
			}}
		>
			<ChevronLeftIcon />
		</div>
	{/if}
	<div
		bind:this={tabList}
		on:scroll={() => {
			updateSteppers();
		}}
		{...omit($$restProps, "class", "role", "aria-orientation")}
		class={classes($$restProps, "navds-tabs__tablist")}
		data-orientation="horizontal"
		role="tablist"
		aria-orientation="horizontal"
		style="outline: none"
		tabindex="0"
	>
		<slot />
	</div>
	{#if showSteppers}
		<div
			class="navds-tabs__scroll-button"
			class:navds-tabs__scroll-button--hidden={!showStepperRight}
			aria-hidden="true"
			on:click={() => {
				scroll(true);
			}}
		>
			<ChevronRightIcon />
		</div>
	{/if}
</div>
