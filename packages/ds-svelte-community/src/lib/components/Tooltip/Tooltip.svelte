<script lang="ts">
	import { Detail } from "$lib";
	import { classes } from "../helpers";
	import type { TooltipProps } from "./type";

	let {
		content,
		open = false,
		placement = "top",
		arrow = true,
		offset = 10,
		maxChar = 80,
		delay = 150,
		keys = [],
		children,
		...restProps
	}: TooltipProps = $props();

	$effect(() => {
		if (content.length > maxChar) {
			console.warn(`Tooltip: content exceeds maxChar (${maxChar}). Content: ${content}`);
		}
	});

	let timeout: ReturnType<typeof setTimeout>;

	function handleMouseEnter() {
		timeout = setTimeout(() => {
			open = true;
		}, delay);
	}

	function handleMouseLeave() {
		clearTimeout(timeout);
		open = false;
	}

	let width: number = $state(0);
	let height: number = $state(0);
	let tooltipWidth: number = $state(0);
	let tooltipHeight: number = $state(0);

	const calculateTooltipStyles = (
		width: number,
		height: number,
		tooltipWidth: number,
		tooltipHeight: number,
		position: typeof placement,
	) => {
		const styles: {
			[key: string]: string;
		} = {
			top: "unset",
			right: "unset",
			bottom: "unset",
			left: "unset",
		};

		switch (position) {
			case "right":
				styles.top = `${height / 2 - tooltipHeight / 2}px`;
				styles.right = `-${tooltipWidth + offset}px`;
				break;
			case "bottom":
				styles.bottom = `-${tooltipHeight + offset}px`;
				styles.left = `${width / 2 - tooltipWidth / 2}px`;
				break;
			case "left":
				styles.top = `${height / 2 - tooltipHeight / 2}px`;
				styles.left = `-${tooltipWidth + offset}px`;
				break;
			default: //	case "top":
				styles.top = `-${tooltipHeight + offset}px`;
				styles.left = `${width / 2 - tooltipWidth / 2}px`;
		}

		return Object.keys(styles)
			.reduce((acc, key) => {
				const value = styles[key];
				if (value !== "unset") {
					acc.push(`${key}: ${value};`);
				}
				return acc;
			}, [] as string[])
			.join(" ");
	};

	const calculateArrowStyles = (
		_width: number,
		_height: number,
		_tooltipWidth: number,
		tooltipHeight: number,
		position: typeof placement,
	) => {
		const styles: {
			[key: string]: string;
		} = {
			top: "unset",
			right: "unset",
			bottom: "unset",
			left: "unset",
		};

		switch (position) {
			case "right":
				styles.left = "-3.5px";
				styles.top = `${tooltipHeight / 2 - 3.5}px`;
				break;
			case "bottom":
				styles.top = "-3.5px";
				break;
			case "left":
				styles.right = "-3.5px";
				styles.top = `${tooltipHeight / 2 - 3.5}px`;
				break;
			default: //	case "top":
				styles.bottom = "-3.5px";
		}

		return Object.keys(styles)
			.reduce((acc, key) => {
				const value = styles[key];
				if (value !== "unset") {
					acc.push(`${key}: ${value};`);
				}
				return acc;
			}, [] as string[])
			.join(" ");
	};

	let tooltipStyles = $derived(
		calculateTooltipStyles(width, height, tooltipWidth, tooltipHeight, placement),
	);
	let arrowStyles = $derived(
		calculateArrowStyles(width, height, tooltipWidth, tooltipHeight, placement),
	);
</script>

<div
	class="ds-svelte-tooltip-wrapper"
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	bind:clientWidth={width}
	bind:clientHeight={height}
	role="tooltip"
>
	<!-- Content to which the tooltip will activate -->
	{@render children()}

	{#if open}
		<div
			tabindex="-1"
			role="tooltip"
			id="r7"
			class={classes(restProps, "navds-tooltip", "navds-detail", "navds-detail--small")}
			data-side={placement}
			style="position: absolute;  visibility: visible; {tooltipStyles}"
			bind:clientWidth={tooltipWidth}
			bind:clientHeight={tooltipHeight}
		>
			{content}

			{#if keys.length > 0}
				<span class="navds-tooltip__keys">
					{#each keys as key}
						<Detail size="small" as="kbd" class="navds-tooltip__key">
							{key}
						</Detail>
					{/each}
				</span>
			{/if}
			{#if arrow}
				<div class="navds-tooltip__arrow" style={arrowStyles}></div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.navds-tooltip {
		white-space: nowrap;
	}

	.ds-svelte-tooltip-wrapper {
		display: inline-block;
		position: relative;
	}
</style>
