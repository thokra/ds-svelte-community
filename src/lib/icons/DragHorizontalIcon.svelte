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
		d="M7.5 8.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6 1.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm0 4.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-4.5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm7.5-6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm1.5 6a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
		clip-rule="evenodd"
	/>
</svg>
