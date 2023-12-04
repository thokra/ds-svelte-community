<script lang="ts">
	import Popover from "../Popover/Popover.svelte";
	import { classes, omit } from "../helpers";
	import HelpTextIcon from "./HelpTextIcon.svelte";
	import type { HelpTextProps } from "./type";

	type $$Props = HelpTextProps;

	export let title: string;
	export let wrapperClass: string = "";
	export let placement: HelpTextProps["placement"] = "top";
	export let strategy: HelpTextProps["strategy"] = "absolute";

	let btnEl: HTMLButtonElement;

	let open = false;
</script>

<div class="navds-help-text {wrapperClass}">
	<!-- onClick={(e) => {
			setOpen((x) => !x);
			onClick?.(e);
		}} -->
	<button
		bind:this={btnEl}
		{...omit($$restProps, "class")}
		on:click={() => (open = !open)}
		class={classes($$restProps, "navds-help-text__button")}
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
		<slot />
	</Popover>
</div>
