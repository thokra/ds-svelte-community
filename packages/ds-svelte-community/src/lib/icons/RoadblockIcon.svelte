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
		d="M4.75 4a.75.75 0 0 0-1.5 0v16a.75.75 0 0 0 1.5 0v-7.248h14.5V20a.75.75 0 0 0 1.5 0V6.012a.8.8 0 0 0 0-.022V4a.75.75 0 0 0-1.5 0v1.25h-3.238a.72.72 0 0 0-.022 0h-3.978a.72.72 0 0 0-.022 0H8.012a.72.72 0 0 0-.022 0H4.75V4Zm13.849 2.75H16.4l-3 4.502h2.197l3-4.502ZM17.4 11.252h1.849V8.476l-1.85 2.774Zm-5-4.502h2.2l-3.001 4.502H9.4l3-4.502Zm-1.802 0H8.4l-3 4.502h2.197l3-4.502ZM4.75 9.523 6.599 6.75H4.75v2.773Z"
		clip-rule="evenodd"
	/>
</svg>
