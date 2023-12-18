<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
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
		d="M20.439 3.392A.75.75 0 0 1 20.75 4v16a.75.75 0 0 1-1.5 0v-6.25H19A2.75 2.75 0 0 1 16.25 11V7.883a4.75 4.75 0 0 1 3.248-4.506l.265-.089a.75.75 0 0 1 .675.104ZM4 3.25a.75.75 0 0 1 .75.75v3.25a.25.25 0 0 0 .5 0V4a.75.75 0 0 1 1.5 0v3.25a.25.25 0 0 0 .5 0V4a.75.75 0 0 1 1.5 0v5a2.75 2.75 0 0 1-2 2.646V20a.75.75 0 0 1-1.5 0v-8.353A2.751 2.751 0 0 1 3.25 9V4A.75.75 0 0 1 4 3.25Zm6.515 1.428c.38-.728 1.015-1.428 1.985-1.428.957 0 1.596.667 1.983 1.4.39.736.629 1.707.76 2.742.133.814.149 1.84-.205 2.705a2.632 2.632 0 0 1-.916 1.181 2.55 2.55 0 0 1-.872.388V20a.75.75 0 0 1-1.5 0v-8.334a2.531 2.531 0 0 1-.872-.388 2.632 2.632 0 0 1-.916-1.181c-.354-.866-.338-1.893-.204-2.707.13-1.002.37-1.97.757-2.712Z"
		clip-rule="evenodd"
	/>
</svg>
