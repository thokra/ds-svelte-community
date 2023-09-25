<script lang="ts">
	import { default as SuccessFilledIcon } from "$lib/icons/CheckmarkCircleFillIcon.svelte";
	import { default as WarningFilledIcon } from "$lib/icons/ExclamationmarkTriangleFillIcon.svelte";
	import { default as InformationFilledIcon } from "$lib/icons/InformationSquareFillIcon.svelte";
	import { default as ErrorFilledIcon } from "$lib/icons/XMarkOctagonFillIcon.svelte";
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

	/**
	 * Title attribute on the icon
	 */
	export let iconTitleText = "";
</script>

<div
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-alert", `navds-alert--${variant}`, `navds-alert--${size}`)}
	class:navds-alert--full-width={fullWidth}
	class:navds-alert--inline={inline}
>
	{#if variant == "error"}
		<ErrorFilledIcon class="navds-alert__icon" title={iconTitleText ? iconTitleText : "Error"} />
	{:else if variant == "warning"}
		<WarningFilledIcon
			class="navds-alert__icon"
			title={iconTitleText ? iconTitleText : "Warning"}
		/>
	{:else if variant == "info"}
		<InformationFilledIcon
			class="navds-alert__icon"
			title={iconTitleText ? iconTitleText : "Information"}
		/>
	{:else if variant == "success"}
		<SuccessFilledIcon
			class="navds-alert__icon"
			title={iconTitleText ? iconTitleText : "Success"}
		/>
	{/if}
	<BodyLong as="div" {size} class="navds-alert__wrapper">
		<!-- Alert content -->
		<slot />
	</BodyLong>
</div>
