<script lang="ts">
	import { CheckmarkCircleFill as SuccessFilled } from "$lib/icons";
	import { onMount } from "svelte";
	import { omit } from "../helpers";
	import Label from "../typography/Label.svelte";
	import { getStepperContext, type StepProps } from "./type";

	type $$Props = StepProps;

	/**
	 * Makes step-indicator a checkmark
	 * @default false
	 */
	export let completed = false;
	/**
	 * Makes step non-interactive if false. Step will be set to a <div>, overriding `as`-prop
	 * @default true
	 */
	export let interactive: boolean | undefined = undefined;

	const ctx = getStepperContext();

	const { activeStep, interactive: interactiveStore, steps } = ctx;

	let as = "a";
	let isInteractive: boolean | null = null;
	$: {
		if (interactive === undefined) {
			isInteractive = $interactiveStore;
		}
		if (!isInteractive) {
			as = "div";
		}
	}

	let self: HTMLElement;
	onMount(() => {
		ctx.register(self);
		return () => {
			ctx.unregister(self);
		};
	});

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
		class:navds-stepper__step--non-interactive={!isInteractive}
		class:navds-stepper__step--completed={completed}
		class:unstyled={as == "a"}
		aria-current={index == $activeStep}
		on:click={isInteractive ? handleClick : null}
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
