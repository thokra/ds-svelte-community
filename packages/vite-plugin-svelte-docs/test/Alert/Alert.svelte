<!--
	@component
	Alert is a notification component that creates focus around a response message without necessarily interrupting the user's task flow.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/alert).
-->

<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { Props } from "./type";

	let {
		variant = "info",
		size = "medium",
		fullWidth = false,
		inline = false,
		iconTitleText = "",
		children,
		...restProps
	}: Props = $props();
</script>

<div
	{...omit(restProps, "class")}
	class={classes(restProps, "navds-alert", `navds-alert--${variant}`, `navds-alert--${size}`)}
	class:navds-alert--full-width={fullWidth}
	class:navds-alert--inline={inline}
>
	{iconTitleText}
	{#if variant == "error"}
		error icon
	{:else if variant == "warning"}
		warning icon
	{:else if variant == "info"}
		info icon
	{:else if variant == "success"}
		success icon
	{/if}
	<p>
		{@render children()}
	</p>
</div>
