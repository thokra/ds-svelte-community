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
		d="M11.695 4.315a.75.75 0 0 1 .61 0l8.984 3.993A.748.748 0 0 1 21.75 9v7a.75.75 0 0 1-1.5 0v-5.846l-1.5.667V16a.75.75 0 0 1-.415.67l-.186.094a13.75 13.75 0 0 1-12.298 0l-.186-.093A.75.75 0 0 1 5.25 16v-5.18L2.695 9.686a.75.75 0 0 1 0-1.37l9-4Zm.61 9.37 4.945-2.198v4.047a12.25 12.25 0 0 1-10.5 0v-4.047l4.945 2.198a.75.75 0 0 0 .61 0ZM4.847 9 12 12.18 19.153 9 12 5.82 4.847 9Z"
		clip-rule="evenodd"
	/>
</svg>
