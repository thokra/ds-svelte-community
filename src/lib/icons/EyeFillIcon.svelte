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
		d="M21.597 11.54a10.417 10.417 0 0 0-.573-.79c-.4-.5-.998-1.163-1.794-1.826C17.637 7.596 15.223 6.25 12 6.25c-3.222 0-5.637 1.346-7.23 2.674a12.845 12.845 0 0 0-1.793 1.826 10.456 10.456 0 0 0-.573.79l-.047.074a.771.771 0 0 0 .047.846 10.413 10.413 0 0 0 .573.79c.4.5.997 1.163 1.793 1.826C6.363 16.404 8.778 17.75 12 17.75c3.223 0 5.637-1.346 7.23-2.674a12.846 12.846 0 0 0 1.793-1.826 10.384 10.384 0 0 0 .574-.79l.046-.074a.751.751 0 0 0 0-.772 3.143 3.143 0 0 0-.046-.074ZM9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM12 7.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5Z"
		clip-rule="evenodd"
	/>
</svg>
