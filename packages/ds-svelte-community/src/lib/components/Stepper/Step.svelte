<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
</script>

<script lang="ts">
	import { onDestroy } from "svelte";
	import { omit } from "../helpers";
	import Label from "../typography/Label/Label.svelte";
	import CompletedIcon from "./CompletedIcon.svelte";
	import { getStepperContext, type StepProps } from "./type.svelte";

	let {
		completed = false,
		interactive,
		completedLabel = "Completed",
		children,
		...restProps
	}: StepProps = $props();

	const id = newUniqueId();
	const ctx = getStepperContext();

	let isInteractive = $derived.by(() => {
		if (interactive === undefined) {
			return ctx.interactive;
		}
		return interactive;
	});

	let as = $derived(isInteractive ? "a" : "div");

	ctx.register(id);
	let index = $derived(ctx.steps.indexOf(id) + 1);

	onDestroy(() => {
		ctx.unregister(id);
	});

	const handleClick = (e: MouseEvent) => {
		ctx.setStep(index, e);
	};
</script>

<li
	class="navds-stepper__item"
	class:navds-stepper__item--behind={index < ctx.activeStep}
	class:navds-stepper__item--non-interactive={!isInteractive}
	class:navds-stepper__item--completed={completed}
>
	<span class="navds-stepper__line navds-stepper__line--1"></span>
	<svelte:element
		this={as}
		{...omit(restProps, "class")}
		class="navds-stepper__step"
		class:navds-stepper__step--active={index == ctx.activeStep}
		class:navds-stepper__step--behind={index < ctx.activeStep}
		class:navds-stepper__step--non-interactive={!isInteractive}
		class:navds-stepper__step--completed={completed}
		class:unstyled={as == "a"}
		aria-current={index == ctx.activeStep}
		onclick={isInteractive ? handleClick : null}
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
			{@render children()}
		</Label>
	</svelte:element>
	<span class="navds-stepper__line navds-stepper__line--2"></span>
</li>
