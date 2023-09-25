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
		d="M5 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75H5Zm9.75 18h-2v-2.5h2v2.5Zm1.5-3.25v3.25h2V3.75H5.75v16.5h5.5V17a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75Zm-7-4a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Zm-.75 3.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM12.75 13a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Zm3.5 0a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM12 5.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V10a.75.75 0 0 1-1.5 0V8.75H10a.75.75 0 0 1 0-1.5h1.25V6a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
