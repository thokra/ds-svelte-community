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
		d="M13.5 3.75a.75.75 0 0 0 0 1.5h4.19l-4.72 4.72a.75.75 0 1 0 1.06 1.06l4.72-4.72v4.19a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-.75-.75h-6Zm-2.47 9.22a.75.75 0 0 1 0 1.06l-4.72 4.72h4.19a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19l4.72-4.72a.75.75 0 0 1 1.06 0Z"
		clip-rule="evenodd"
	/>
</svg>
