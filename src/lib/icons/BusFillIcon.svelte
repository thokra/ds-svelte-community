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
		d="M3 5.25a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h1.821c.176 0 .298-.178.257-.349a2.75 2.75 0 1 1 5.345 0c-.042.171.08.349.255.349h2.643c.176 0 .298-.178.257-.349a2.75 2.75 0 1 1 5.345 0c-.042.171.08.349.256.349H21a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H3ZM17.75 7a.25.25 0 0 1 .25-.25h2a.25.25 0 0 1 .25.25v4a.25.25 0 0 1-.25.25h-2a.25.25 0 0 1-.25-.25V7Zm.25 9.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM7.75 18a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"
		clip-rule="evenodd"
	/>
</svg>
