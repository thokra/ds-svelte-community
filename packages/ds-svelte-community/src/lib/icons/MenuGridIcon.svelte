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
		d="M4.25 5A.75.75 0 0 1 5 4.25h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75V5Zm0 6.25A.75.75 0 0 1 5 10.5h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75v-1.5Zm.75 5.5a.75.75 0 0 0-.75.75V19c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75H5ZM10.5 5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V5Zm.75 5.5a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-1.5Zm-.75 7a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5Zm7-13.25a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H19a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75h-1.5Zm-.75 7a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75v-1.5Zm.75 5.5a.75.75 0 0 0-.75.75V19c0 .414.336.75.75.75H19a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-1.5Z"
		clip-rule="evenodd"
	/>
</svg>
