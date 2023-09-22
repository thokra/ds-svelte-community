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
		d="M7 2.25a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h.25v1H6a.75.75 0 0 0-.75.75V21c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V8.5a.75.75 0 0 0-.75-.75h-1.25v-1H17a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75H7Zm9 3h.25v-1.5h-8.5v1.5H16Zm-.75 1.5v1h-6.5v-1h6.5Zm.75 2.5H6.75v11h10.5v-11H16ZM9.75 11.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v1.25h1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-1.25v1.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-1.25H8.5a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h1.25V11.5Zm1.5.75v1.25a.75.75 0 0 1-.75.75H9.25v1.5h1.25a.75.75 0 0 1 .75.75v1.25h1.5V16.5a.75.75 0 0 1 .75-.75h1.25v-1.5H13.5a.75.75 0 0 1-.75-.75v-1.25h-1.5Z"
		clip-rule="evenodd"
	/>
</svg>
