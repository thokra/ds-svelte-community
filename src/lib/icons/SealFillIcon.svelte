<script lang="ts" context="module">
	import newUniqueId from "locally-unique-id-generator";
	import type { SVGAttributes } from "svelte/elements";
</script>

<script lang="ts">
	/**
	 * Title of the icon, used for accessibility
	 */
	export let title = "";

	type $$Props = SVGAttributes<SVGElement> & {
		title?: string;
	};

	const id = newUniqueId();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="1em"
	height="1em"
	fill="none"
	focusable="false"
	role="img"
	viewBox="0 0 24 24"
	aria-labelledby={title ? id : undefined}
	{...$$restProps}
>
	{#if title}
		<title {id}>{title}</title>
	{/if}
	<slot />
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M9.99 3.051a2.75 2.75 0 0 1 4.019 0l.788.844c.247.264.595.408.956.396l1.154-.04a2.75 2.75 0 0 1 2.841 2.842l-.039 1.154c-.012.36.132.71.396.955l.844.789a2.75 2.75 0 0 1 0 4.018l-.844.789a1.25 1.25 0 0 0-.396.955l.04 1.154a2.75 2.75 0 0 1-2.842 2.841l-1.154-.039a1.25 1.25 0 0 0-.956.396l-.788.844a2.75 2.75 0 0 1-4.018 0l-.789-.844a1.25 1.25 0 0 0-.955-.396l-1.154.04a2.75 2.75 0 0 1-2.841-2.842l.039-1.154a1.25 1.25 0 0 0-.396-.955l-.844-.789a2.75 2.75 0 0 1 0-4.018l.844-.789a1.25 1.25 0 0 0 .396-.955l-.04-1.154a2.75 2.75 0 0 1 2.842-2.841l1.154.039c.36.012.709-.132.955-.396l.789-.844Z"
		clip-rule="evenodd"
	/>
</svg>
