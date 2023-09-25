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
		d="M12 6.25A9.75 9.75 0 0 0 2.25 16c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75A9.75 9.75 0 0 0 12 6.25Zm2.28 9a.25.25 0 0 0 .25-.25v-1a.75.75 0 0 0-1.5 0v1c0 .138.112.25.25.25h1Zm3.56 0a.25.25 0 0 0 .25-.25v-1a.75.75 0 0 0-1.5 0v1c0 .138.113.25.25.25h1Zm-10.68 0a.25.25 0 0 0 .25-.25v-1a.75.75 0 0 0-1.5 0v1c0 .138.111.25.25.25h1ZM9.47 15c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-1a.75.75 0 0 0-1.5 0v1Z"
		clip-rule="evenodd"
	/>
</svg>
