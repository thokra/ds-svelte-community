<!--
	@component
	Loader gives users a visual indication that something is loading or taking time.
	Even though users have little information about what is happening, they are assured that something is happening.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/loader).
-->

<script lang="ts" module>
	import newUniqueId from "$lib/components/local-unique-id";
</script>

<script lang="ts">
	import { classes, omit } from "../helpers";
	import type { Props } from "./type";

	let {
		size = "medium",
		title = "waiting...",
		transparent = false,
		variant = "neutral",
		...restProps
	}: Props = $props();

	const id = "ldr" + newUniqueId();
</script>

<svg
	{...omit(restProps, "class")}
	class={classes(restProps, `navds-loader navds-loader--${size}`, `navds-loader--${variant}`)}
	class:navds-loader--transparent={transparent}
	focusable="false"
	viewBox="0 0 50 50"
	preserveAspectRatio="xMidYMid"
	aria-labelledby={id}
>
	<title {id}>{title}</title>
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
