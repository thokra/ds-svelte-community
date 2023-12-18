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
		d="M9.15 13.53a1.75 1.75 0 0 1 0-3.06l3.6-2V7a.75.75 0 0 0-1.114-.656l-9 5a.75.75 0 0 0 0 1.312l9 5A.75.75 0 0 0 12.75 17v-1.47l-3.6-2Zm9.486-7.186A.75.75 0 0 1 19.75 7v10a.75.75 0 0 1-1.114.656l-9-5a.75.75 0 0 1 0-1.312l9-5Z"
		clip-rule="evenodd"
	/>
</svg>
