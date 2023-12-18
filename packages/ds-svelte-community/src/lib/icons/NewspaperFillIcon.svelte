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
		d="M7 3.25a.75.75 0 0 0-.75.75v1.25H4a.75.75 0 0 0-.75.75v12.5a2.25 2.25 0 0 0 2.25 2.25H17A3.75 3.75 0 0 0 20.75 17V4a.75.75 0 0 0-.75-.75H7Zm-1.5 16a.75.75 0 0 0 .75-.75V6.75h-1.5V18.5c0 .414.336.75.75.75Zm4.5-12a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-.75-.75h-7Zm.75 4v-2.5h5.5v2.5h-5.5ZM9.25 16a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
