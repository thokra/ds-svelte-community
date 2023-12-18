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
		d="M12 3.25a.75.75 0 0 1 .75.75v1.25h5.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-5.75v2.5h2.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-2.75V20a.75.75 0 0 1-1.5 0v-1.25H8.5a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h2.75v-2.5H5.5a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h5.75V4a.75.75 0 0 1 .75-.75Zm-.75 11.5h-2v2.5h2v-2.5Zm1.5 2.5h2v-2.5h-2v2.5Zm-6.5-10.5h5v2.5h-5v-2.5Zm6.5 0v2.5h5v-2.5h-5Z"
		clip-rule="evenodd"
	/>
</svg>
