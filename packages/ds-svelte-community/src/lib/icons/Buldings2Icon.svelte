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
		d="M10.25 3a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-8a.75.75 0 0 1 .75-.75h7.25V3Zm2 10.75v6.5h-8.5v-6.5h8.5Zm8 6.5h-6.5V13a.75.75 0 0 0-.75-.75h-1.25v-8.5h8.5v16.5ZM18.75 5.5a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM4.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm3.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5h-1Zm9.5-6.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm.75 4.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Z"
		clip-rule="evenodd"
	/>
</svg>
