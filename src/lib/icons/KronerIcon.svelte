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
		d="M11.1 8.45a.75.75 0 1 0-1.2-.9l-2.65 3.533V8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-3.083L9.9 16.45a.75.75 0 1 0 1.2-.9L8.438 12 11.1 8.45ZM12.75 8a.75.75 0 0 1 .75-.75H16a2.75 2.75 0 0 1 1.1 5.271l1.57 3.144a.75.75 0 1 1-1.34.67l-1.793-3.585H14.25V16a.75.75 0 0 1-1.5 0V8Zm3.262 3.25H14.25v-2.5H16a1.25 1.25 0 0 1 .012 2.5Z"
		clip-rule="evenodd"
	/>
</svg>
