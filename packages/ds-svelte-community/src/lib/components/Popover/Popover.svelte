<script lang="ts" context="module">
	import { flip as flipMW, offset as offsetMW, shift as shiftMW } from "svelte-floating-ui/dom";
</script>

<script lang="ts">
	import { arrow as arrowMW, createFloatingActions } from "svelte-floating-ui";

	import { writable } from "svelte/store";
	import { classes, omit } from "../helpers";
	import type { PopoverProps } from "./type";

	type $$Props = PopoverProps;

	/**
	 * Open state
	 */
	export let open: PopoverProps["open"];
	/**
	 * Orientation for popover
	 * @note Try to keep general usage to "top", "bottom", "left", "right"
	 * @default "top"
	 */
	export let placement: PopoverProps["placement"] = "top";
	/**
	 * Adds a arrow from dialog to anchor when true
	 * @default true
	 */
	export let arrow: PopoverProps["arrow"] = true;
	/**
	 * Distance from anchor to popover
	 * @default 16 w/arrow, 4 w/no-arrow
	 */
	export let offset: PopoverProps["offset"] = undefined;
	/**
	 * Changes what CSS position property to use
	 * You want to use "fixed" if reference element is inside a fixed container, but popover is not
	 * @default "absolute"
	 */
	export let strategy: PopoverProps["strategy"] = "absolute";
	/**
	 * Changes placement of the floating element in order to keep it in view.
	 * @default true
	 */
	export let flip: PopoverProps["flip"] = true;

	/**
	 * Reference element
	 */
	export let anchorEl: PopoverProps["anchorEl"];

	/**
	 * Class to add to the popover content
	 */
	export let contentClass: PopoverProps["contentClass"] = undefined;

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

	$: {
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
	}

	$: {
		if (anchorEl && popover) {
			floatingRef(anchorEl);
			anchorEl.addEventListener("focusout", () => {
				open = false;
			});
		}
	}
</script>

<div
	use:floatingContent
	bind:this={popover}
	class={classes($$restProps, "navds-popover")}
	class:navds-popover--hidden={!open || !anchorEl}
	data-placement={placement}
	{...omit($$restProps, "class")}
>
	<div class="navds-popover__content {contentClass}">
		<slot />
	</div>
	{#if arrow}
		<div class="navds-popover__arrow" bind:this={$arrowRef} />
	{/if}
</div>
