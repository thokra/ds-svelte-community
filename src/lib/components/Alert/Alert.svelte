<script lang="ts">
	import {
		XMarkOctagonFill as ErrorFilled,
		InformationSquareFill as InformationFilled,
		CheckmarkCircleFill as SuccessFilled,
		ExclamationmarkTriangleFill as WarningFilled,
	} from "$lib/icons";
	import { classes, omit } from "../helpers";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import type { Props } from "./type";

	type $$Props = Props;

	/**
	 * Changes colors and icon usage when changed
	 */
	export let variant: Props["variant"] = "info";

	/**
	 * Changes padding and font-sizes
	 * @default medium
	 */
	export let size: Props["size"] = "medium";
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
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-alert", `navds-alert--${variant}`, `navds-alert--${size}`)}
	class:navds-alert--full-width={fullWidth}
	class:navds-alert--inline={inline}
>
	{#if variant == "error"}
		<ErrorFilled class="navds-alert__icon" focusable="false" role="img" />
	{:else if variant == "warning"}
		<WarningFilled class="navds-alert__icon" focusable="false" role="img" />
	{:else if variant == "info"}
		<InformationFilled class="navds-alert__icon" focusable="false" role="img" />
	{:else if variant == "success"}
		<SuccessFilled class="navds-alert__icon" focusable="false" role="img" />
	{/if}
	<BodyLong as="div" {size} class="navds-alert__wrapper">
		<!-- Alert content -->
		<slot />
	</BodyLong>
</div>
