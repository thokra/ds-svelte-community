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
		d="M9.25 5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v1.25H21a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V7A.75.75 0 0 1 3 6.25h6.25V5Zm4 .75v.5h-2.5v-.5h2.5Zm-9.5 12.5V7.75h16.5v10.5H3.75ZM5.25 10A.75.75 0 0 1 6 9.25h3a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-6Zm1.5.75v4.5h1.5v-4.5h-1.5Zm4.5-.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6ZM11.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
