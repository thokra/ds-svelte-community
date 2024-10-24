<!--
	@component
	Alert is a notification component that creates focus around a response message without necessarily interrupting the user's task flow.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/alert).
-->

<script lang="ts">
	import Button from "$lib/components/Button/Button.svelte";
	import { XMarkIcon } from "$lib/icons";
	import { default as SuccessFilledIcon } from "$lib/icons/CheckmarkCircleFillIcon.svelte";
	import { default as WarningFilledIcon } from "$lib/icons/ExclamationmarkTriangleFillIcon.svelte";
	import { default as InformationFilledIcon } from "$lib/icons/InformationSquareFillIcon.svelte";
	import { default as ErrorFilledIcon } from "$lib/icons/XMarkOctagonFillIcon.svelte";
	import { classes, omit } from "../helpers";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";
	import type { Props } from "./type";

	let {
		variant = "info",
		size = "medium",
		fullWidth = false,
		contentMaxWidth = true,
		inline = false,
		iconTitleText = "",
		children,
		closeButton = false,
		closeButtonIconText = "Close message",
		onClose = () => {},
		...restProps
	}: Props = $props();
</script>

<div
	{...omit(restProps, "class")}
	class={classes(restProps, "navds-alert", `navds-alert--${variant}`, `navds-alert--${size}`)}
	class:navds-alert--full-width={fullWidth}
	class:navds-alert--inline={inline}
	class:navds-alert--close-button={closeButton}
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
	<BodyLong
		as="div"
		{size}
		class={`navds-alert__wrapper ${contentMaxWidth && "navds-alert__wrapper--maxwidth"}`}
	>
		{@render children()}
	</BodyLong>

	{#if closeButton && !inline}
		<div class="navds-alert__button-wrapper">
			<Button
				class="navds-alert__button"
				size="small"
				variant="tertiary-neutral"
				type="button"
				onclick={onClose}
			>
				{#snippet iconLeft()}
					<XMarkIcon title={closeButtonIconText} />
				{/snippet}
			</Button>
		</div>
	{/if}
</div>
