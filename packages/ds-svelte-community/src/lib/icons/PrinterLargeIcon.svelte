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
		d="M7.335 2.33a.75.75 0 1 0-.67 1.34l5.158 2.58H5a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h11a.75.75 0 0 0 .75-.75v-2.599l2.666-1.777a.75.75 0 1 0-.832-1.248l-1.834 1.223V14.4l2.666-1.777a.75.75 0 1 0-.832-1.248l-1.834 1.223V7a.75.75 0 0 0-.75-.75h-.823L7.335 2.33Zm7.649 5.42h.266v11.5h-9.5V7.75h9.234ZM7.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
