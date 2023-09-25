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
		d="M18.237 3.177a1.75 1.75 0 0 0-2.474 0L8.348 10.59a3.75 3.75 0 0 0-1.098 2.652v2.446l-1.28 1.28a.75.75 0 1 0 1.06 1.061l1.28-1.28h2.447a3.75 3.75 0 0 0 2.652-1.098l7.414-7.415a1.75 1.75 0 0 0 0-2.474l-2.586-2.586Zm-1.414 1.06a.25.25 0 0 1 .354 0l2.586 2.586a.25.25 0 0 1 0 .354l-7.415 7.414a2.25 2.25 0 0 1-1.59.659H8.75v-2.007c0-.597.237-1.17.659-1.591l7.414-7.415Zm.207 3.793a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 1 0 1.06 1.06l3-3Zm-12 12a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06l1-1Z"
		clip-rule="evenodd"
	/>
</svg>
