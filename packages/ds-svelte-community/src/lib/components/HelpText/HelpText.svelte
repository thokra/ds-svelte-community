<!--
	@component
	HelpText gives users an explanation of unknown terms or concepts, which is displayed when they need it.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/helptext).

-->

<script lang="ts">
	import Popover from "../Popover/Popover.svelte";
	import { classes, omit } from "../helpers";
	import HelpTextIcon from "./HelpTextIcon.svelte";
	import type { HelpTextProps } from "./type";

	// type $$Props = HelpTextProps;

	// export let title: string;
	// export let wrapperClass: string = "";
	// export let placement: HelpTextProps["placement"] = "top";
	// export let strategy: HelpTextProps["strategy"] = "absolute";

	let {
		title,
		wrapperClass = "",
		placement = "top",
		strategy = "absolute",
		children,
		...restProps
	}: HelpTextProps = $props();

	let btnEl: HTMLButtonElement | undefined = $state(undefined);
	let open = $state(false);
</script>

<div class="navds-help-text {wrapperClass}">
	<!-- onClick={(e) => {
			setOpen((x) => !x);
			onClick?.(e);
		}} -->
	<button
		bind:this={btnEl}
		{...omit(restProps, "class")}
		onclick={() => (open = !open)}
		class={classes(restProps, "navds-help-text__button")}
		type="button"
		aria-expanded={open}
	>
		<HelpTextIcon {title} />
		<HelpTextIcon filled {title} />
	</button>
	<!-- onClose={() => setOpen(false)} -->
	<Popover
		class="navds-help-text__popover"
		contentClass="navds-body-short"
		bind:open
		anchorEl={btnEl}
		{placement}
		{strategy}
		offset={12}
	>
		{@render children()}
	</Popover>
</div>
