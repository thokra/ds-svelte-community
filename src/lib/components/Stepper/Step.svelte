<script lang="ts">
	import { CheckmarkCircleFill as SuccessFilled } from "$lib/icons";
	import { onMount } from "svelte";
	import { omit } from "../helpers";
	import Label from "../typography/Label.svelte";
	import { getStepperContext } from "./Stepper.svelte";

	/**
	 * Makes step-indicator a checkmark
	 * @default false
	 */
	export let completed = false;
	/**
	 * Makes step non-interactive if false. Step will be set to a <div>, overriding `as`-prop
	 * @default true
	 */
	export let interactive: boolean | null = null;

	const ctx = getStepperContext();

	const { activeStep } = ctx;

	if (interactive === null) {
		interactive = ctx.interactive;
	}

	let as = "a";
	if (!interactive) {
		as = "div";
		console.log("Render as div");
	}

	let self: HTMLElement;
	onMount(() => {
		ctx.register(self);
		return () => {
			ctx.unregister(self);
		};
	});

	const steps = ctx.steps;
	$: index = $steps.indexOf(self) + 1;

	const handleClick = (e: MouseEvent) => {
		ctx.setStep(index, e);
	};
</script>

<li class="navds-stepper__item" bind:this={self}>
	<span class="navds-stepper__line navds-stepper__line--1" />
	<svelte:element
		this={as}
		{...omit($$restProps, "class")}
		class="navds-stepper__step"
		class:navds-stepper__step--active={index == $activeStep}
		class:navds-stepper__step--behind={index < $activeStep}
		class:navds-stepper__step--non-interactive={!interactive}
		class:navds-stepper__step--completed={completed}
		class:unstyled={as == "a"}
		aria-current={index == $activeStep}
		on:click={interactive ? handleClick : null}
	>
		{#if completed}
			<SuccessFilled aria-hidden class="navds-stepper__circle navds-stepper__circle--success" />
		{:else}
			<Label class="navds-stepper__circle" as="span" aria-hidden="true">
				{index}
			</Label>
		{/if}
		<Label as="span" class="navds-stepper__content">
			<slot />
		</Label>
	</svelte:element>
	<span class="navds-stepper__line navds-stepper__line--2" />
</li>
