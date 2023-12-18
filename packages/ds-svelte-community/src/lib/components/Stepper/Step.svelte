<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
</script>

<script lang="ts">
	import { onDestroy } from "svelte";
	import { omit } from "../helpers";
	import Label from "../typography/Label/Label.svelte";
	import CompletedIcon from "./CompletedIcon.svelte";
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

	export let completedLabel = "Completed";

	const id = newUniqueId();
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

	$: index = $steps.indexOf(id) + 1;

	ctx.register(id);
	onDestroy(() => {
		ctx.unregister(id);
	});

	const handleClick = (e: MouseEvent) => {
		ctx.setStep(index, e);
	};
</script>

<li
	class="navds-stepper__item"
	class:navds-stepper__item--behind={index < $activeStep}
	class:navds-stepper__item--non-interactive={!isInteractive}
	class:navds-stepper__item--completed={completed}
>
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
		role={isInteractive ? "button" : undefined}
		tabindex={isInteractive ? 0 : undefined}
	>
		{#if completed}
			<span class="navds-stepper__circle navds-stepper__circle--success">
				<CompletedIcon {completedLabel} />
			</span>
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
