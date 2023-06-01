<script lang="ts">
	import { classes } from "./helpers";
	import Detail from "./typography/Detail.svelte";

	/**
	 * Open state for tooltip
	 */
	export let open = false;

	/**
	 * Orientation for tooltip
	 * @default "top"
	 */
	export let placement: "top" | "right" | "bottom" | "left" = "top";
	/**
	 * Toggles rendering of arrow
	 * @default true
	 */
	export let arrow = true;
	/**
	 * Distance from anchor to tooltip
	 * @default 10px with arrow, 2px without arrow
	 */
	export let offset = 10;
	/**
	 * Text-content inside tooltip
	 */
	export let content: string;
	/**
	 * Sets max allowed character length.
	 * @default 80
	 */
	export let maxChar = 80;
	/**
	 * Adds a delay in milliseconds before opening tooltip
	 * @default 150
	 */
	export let delay = 150;
	/**
	 * List of Keyboard-keys for shortcuts
	 */
	export let keys: string[] = [];

	$: {
		if (content.length > maxChar) {
			console.warn(`Tooltip: content exceeds maxChar (${maxChar}). Content: ${content}`);
		}
	}

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

	let width: number;
	let height: number;
	let tooltipWidth: number;
	let tooltipHeight: number;

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

	$: tooltipStyles = calculateTooltipStyles(width, height, tooltipWidth, tooltipHeight, placement);
	$: arrowStyles = calculateArrowStyles(width, height, tooltipWidth, tooltipHeight, placement);
</script>

<div
	class="ds-svelte-tooltip-wrapper"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	bind:clientWidth={width}
	bind:clientHeight={height}
>
	<slot />

	{#if open}
		<div
			tabindex="-1"
			role="tooltip"
			id="r7"
			class={classes($$restProps, "navds-tooltip", "navds-detail", "navds-detail--small")}
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
				<div class="navds-tooltip__arrow" style={arrowStyles} />
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
