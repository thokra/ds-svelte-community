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
		d="M4.148 8.622A.75.75 0 0 0 2.75 9v6a.75.75 0 0 0 1.5 0v-3.226l2.102 3.604A.75.75 0 0 0 7.75 15V9a.75.75 0 1 0-1.5 0v3.226L4.148 8.622ZM9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm5 0a.75.75 0 0 1 .75.75v2.129l2.174-2.61a.75.75 0 0 1 1.152.961l-2.1 2.52 2.1 2.52a.75.75 0 0 1-1.152.96l-2.174-2.609V15a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
