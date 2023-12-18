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
		d="M5.75 11a7.25 7.25 0 1 1 12.688 4.795l-.188.213V21.5a.75.75 0 0 0 1.5 0v-4.932a8.75 8.75 0 1 0-15.5-5.68l-1.468 4.897a.75.75 0 0 0 .718.965h1.75V18A2.75 2.75 0 0 0 8 20.75h2.25v.75a.75.75 0 0 0 1.5 0V20a.75.75 0 0 0-.75-.75H8c-.69 0-1.25-.56-1.25-1.25v-2a.75.75 0 0 0-.75-.75H4.508l1.242-4.14V11Zm5.03-2.222a1.018 1.018 0 0 1 1.44 0l.25.25a.75.75 0 0 0 1.06 0l.25-.25a1.018 1.018 0 1 1 1.44 1.44L13 12.437l-2.22-2.22a1.018 1.018 0 0 1 0-1.44Zm-1.06-1.06A2.518 2.518 0 0 1 13 7.474a2.518 2.518 0 0 1 3.28 3.803l-2.75 2.75a.75.75 0 0 1-1.06 0l-2.75-2.75a2.518 2.518 0 0 1 0-3.56Z"
		clip-rule="evenodd"
	/>
</svg>
