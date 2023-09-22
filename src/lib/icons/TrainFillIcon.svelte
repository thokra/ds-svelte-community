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
		d="M2.25 6A.75.75 0 0 1 3 5.25h10.8a7.952 7.952 0 0 1 7.95 7.95 2.55 2.55 0 0 1-2.55 2.55H3a.75.75 0 0 1-.75-.75V6ZM14 6.755a.243.243 0 0 0-.25.245v4c0 .138.112.25.25.25h5.609a.24.24 0 0 0 .23-.323C18.921 8.5 16.587 6.855 14 6.755ZM3 17.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5H3Z"
		clip-rule="evenodd"
	/>
</svg>
