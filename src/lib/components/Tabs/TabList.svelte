<script lang="ts">
	import { ChevronLeft as Left, ChevronRight as Right } from "$lib/icons";
	import { onMount } from "svelte";
	import { classes } from "../helpers";

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
		updateSteppers();
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
			<Left />
		</div>
	{/if}
	<div
		bind:this={tabList}
		bind:clientWidth={width}
		on:scroll={() => {
			updateSteppers();
		}}
		class={classes($$restProps, "navds-tabs__tablist")}
		role="tablist"
		aria-orientation="horizontal"
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
			<Right />
		</div>
	{/if}
</div>
