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
		d="M20.193 13.5a1.417 1.417 0 0 1-2.798.326.75.75 0 0 0-.803-.576H7.35a.75.75 0 0 0-.803.576 1.418 1.418 0 1 1-2.402-1.307.75.75 0 0 0 0-1.039 1.417 1.417 0 1 1 2.403-1.306.75.75 0 0 0 .8.576h9.247a.75.75 0 0 0 .8-.576 1.418 1.418 0 1 1 2.403 1.306.75.75 0 0 0 0 1.04c.245.255.395.6.395.98ZM7.804 14.75A2.917 2.917 0 1 1 2.665 12a2.917 2.917 0 1 1 5.139-2.75h8.335A2.917 2.917 0 1 1 21.276 12a2.917 2.917 0 1 1-5.139 2.75H7.805Z"
		clip-rule="evenodd"
	/>
</svg>
