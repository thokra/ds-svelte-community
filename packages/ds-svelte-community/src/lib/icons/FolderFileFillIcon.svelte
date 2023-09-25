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
		d="M7.5 2.25c-.69 0-1.25.56-1.25 1.25v4c0 .138.112.25.25.25H11a3.25 3.25 0 0 1 3.215 2.77c.019.129.127.23.257.23H17.5a.25.25 0 0 0 .25-.25v-7c0-.69-.56-1.25-1.25-1.25h-9ZM9.25 5.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75ZM6 9.25A1.75 1.75 0 0 0 4.25 11v9.5c0 .69.56 1.25 1.25 1.25h13c.69 0 1.25-.56 1.25-1.25v-7c0-.69-.56-1.25-1.25-1.25h-5.75V11A1.75 1.75 0 0 0 11 9.25H6Z"
		clip-rule="evenodd"
	/>
</svg>
