<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { sizes, variants } from "./type";
	/**
	 * Changes Loader width/height
	 * 64px | 40px | 32px | 24px | 20px | 16px
	 */
	export let size: (typeof sizes)[number] = "medium";
	/**
	 * Title prop on svg
	 */
	export let title = "waiting...";
	/**
	 * Sets svg-background to transparent
	 */
	export let transparent = false;
	/**
	 * Colored variants for Loader
	 */
	export let variant: (typeof variants)[number] = "neutral";
</script>

<svg
	{...omit($$restProps, "class")}
	class={classes($$restProps, `navds-loader navds-loader--${size}`, `navds-loader--${variant}`)}
	class:navds-loader--transparent={transparent}
	focusable="false"
	viewBox="0 0 50 50"
	preserveAspectRatio="xMidYMid"
	aria-label={title}
>
	<circle
		class="navds-loader__background"
		xmlns="http://www.w3.org/2000/svg"
		cx="25"
		cy="25"
		r="20"
		fill="none"
	/>
	<circle
		class="navds-loader__foreground"
		cx="25"
		cy="25"
		r="20"
		fill="none"
		stroke-dasharray="50 155"
	/>
</svg>
