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
		d="M6.75 19.25V4.75h6.5V7.5c0 .69.56 1.25 1.25 1.25h2.75v10.5H6.75Zm9.44-12-1.44-1.44v1.44h1.44Zm-9.69-4c-.69 0-1.25.56-1.25 1.25v15c0 .69.56 1.25 1.25 1.25h11c.69 0 1.25-.56 1.25-1.25V8a.75.75 0 0 0-.22-.53l-4-4a.75.75 0 0 0-.53-.22H6.5Zm4.085 9a2.251 2.251 0 1 1 1.414 4 .75.75 0 0 0 .002 1.5A3.75 3.75 0 1 0 9.75 11a.75.75 0 0 0-1.501 0v2c0 .414.336.75.75.75h2a.75.75 0 0 0 0-1.5h-.415Z"
		clip-rule="evenodd"
	/>
</svg>
