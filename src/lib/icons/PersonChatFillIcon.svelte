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
		d="M15.5 4.25c-.69 0-1.25.56-1.25 1.25V12a.75.75 0 0 0 1.28.53l1.78-1.78h4.19c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25h-6ZM4.25 9a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0Zm.538 6.788a5.25 5.25 0 0 1 8.93 3.129.75.75 0 0 1-.746.833H4.028a.75.75 0 0 1-.746-.833 5.25 5.25 0 0 1 1.506-3.13Z"
		clip-rule="evenodd"
	/>
</svg>
