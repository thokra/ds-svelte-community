<script lang="ts">
	import {
		XMarkOctagonFill as ErrorFilled,
		InformationSquareFill as InformationFilled,
		CheckmarkCircleFill as SuccessFilled,
		ExclamationmarkTriangleFill as WarningFilled,
	} from "$lib/icons";
	import { classes } from "./helpers";
	import BodyLong from "./typography/BodyLong.svelte";

	/**
	 * Changes colors and icon usage when changed
	 */
	export let variant: "error" | "warning" | "info" | "success" = "info";

	/**
	 * Changes padding and font-sizes
	 * @default medium
	 */
	export let size: "medium" | "small" = "medium";
	/**
	 * Removes border-radius
	 * @default false
	 */
	export let fullWidth = false;
	/**
	 * Removes background from Alert
	 * @default false
	 */
	export let inline = false;
</script>

<div
	class={classes($$restProps, "navds-alert", `navds-alert--${variant}`, `navds-alert--${size}`)}
	class:navds-alert--full-width={fullWidth}
	class:navds-alert--inline={inline}
	{...$$restProps}
>
	{#if variant == "error"}
		<ErrorFilled class="navds-alert__icon" />
	{:else if variant == "warning"}
		<WarningFilled class="navds-alert__icon" />
	{:else if variant == "info"}
		<InformationFilled class="navds-alert__icon" />
	{:else if variant == "success"}
		<SuccessFilled class="navds-alert__icon" />
	{/if}
	<BodyLong as="div" {size} class="navds-alert__wrapper">
		<slot />
	</BodyLong>
</div>
