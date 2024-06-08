<!--
	@component
	Popover is a hidden panel connected to an element. The popover will be placed on top of all other elements in the interface. You control when and how it should be displayed and hidden.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/popover).
-->

<script lang="ts" context="module">
	import { flip as flipMW, offset as offsetMW, shift as shiftMW } from "svelte-floating-ui/dom";
</script>

<script lang="ts">
	import { arrow as arrowMW, createFloatingActions } from "svelte-floating-ui";

	import { writable } from "svelte/store";
	import { classes, omit } from "../helpers";
	import type { PopoverProps } from "./type";

	let {
		open = $bindable(false),
		placement = "top",
		arrow = true,
		offset,
		strategy = "absolute",
		flip = true,
		anchorEl,
		contentClass,
		children,
		...restProps
	}: PopoverProps = $props();

	const arrowRef = writable<HTMLElement | null>(null);

	const [floatingRef, floatingContent, update] = createFloatingActions({
		placement,
		strategy,
		middleware: [
			offsetMW(offset ?? (arrow ? 16 : 4)),
			flip ? flipMW({ padding: 5, fallbackPlacements: ["bottom", "top"] }) : null,
			shiftMW({ padding: 12 }),
			arrow ? arrowMW({ element: arrowRef, padding: 0 }) : null,
		],
		autoUpdate: true,
		onComputed({ placement, middlewareData }) {
			if (!arrow || $arrowRef == null) {
				return;
			}
			const { x, y } = middlewareData.arrow as { x?: number; y?: number };
			const staticSide = {
				top: "bottom",
				right: "left",
				bottom: "top",
				left: "right",
			}[placement.split("-")[0]];

			Object.assign($arrowRef.style, {
				left: x != null ? `${x}px` : "",
				top: y != null ? `${y}px` : "",
				[staticSide!]: "-0.5rem",
			});
		},
	});
	let popover: HTMLDivElement;

	$effect(() => {
		update({
			placement,
			strategy,
			middleware: [
				offsetMW(offset ?? (arrow ? 16 : 4)),
				flip ? flipMW({ padding: 5, fallbackPlacements: ["bottom", "top"] }) : null,
				shiftMW({ padding: 12 }),
				arrow ? arrowMW({ element: arrowRef, padding: 0 }) : null,
			],
		});
	});

	$effect(() => {
		if (anchorEl && popover) {
			floatingRef(anchorEl);
			anchorEl.addEventListener("focusout", () => {
				open = false;
			});
		}
	});
</script>

<div
	use:floatingContent
	bind:this={popover}
	class={classes(restProps, "navds-popover")}
	class:navds-popover--hidden={!open || !anchorEl}
	data-placement={placement}
	{...omit(restProps, "class")}
>
	<div class="navds-popover__content {contentClass}">
		{@render children()}
	</div>
	{#if arrow}
		<div class="navds-popover__arrow" bind:this={$arrowRef}></div>
	{/if}
</div>
