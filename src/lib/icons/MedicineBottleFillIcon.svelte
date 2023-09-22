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
		d="M7 2.25a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h.25v1H6a.75.75 0 0 0-.75.75V21c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V8.5a.75.75 0 0 0-.75-.75h-1.25v-1H17a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75H7Zm8.25 5.5v-1h-6.5v1h6.5Zm-2 3.75h-2.5a.25.25 0 0 0-.25.25v1.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h1.5a.25.25 0 0 1 .25.25v1.5c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 0-.25-.25Z"
		clip-rule="evenodd"
	/>
</svg>
