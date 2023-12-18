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
		d="M4 3.25a.75.75 0 0 0 0 1.5h6.5a1.75 1.75 0 0 1 1.738 1.543A6.751 6.751 0 0 0 6.25 13c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75 6.751 6.751 0 0 0-6.007-6.71A3.25 3.25 0 0 0 10.5 3.25H4Zm9 4.5a5.251 5.251 0 0 1 5.197 4.5H7.803A5.251 5.251 0 0 1 13 7.75Zm-4 7a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM9.75 19a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM13 14.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm.75 4.25a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM17 14.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm.75 4.25a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Z"
		clip-rule="evenodd"
	/>
</svg>
