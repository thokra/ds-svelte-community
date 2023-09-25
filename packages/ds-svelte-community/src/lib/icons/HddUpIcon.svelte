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
		d="M4 3.25a.75.75 0 0 0-.75.75v8.5a.75.75 0 0 0 .75.75h2a.75.75 0 0 0 0-1.5H4.75v-7h14.5v7H18a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75H4Zm11.5 3a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5h-1.5Zm-4.03 4.22a.748.748 0 0 1 1.06 0l3.5 3.5a.75.75 0 1 1-1.06 1.06l-2.22-2.22v7.69a.75.75 0 0 1-1.5 0v-7.69l-2.22 2.22a.75.75 0 0 1-1.06-1.06l3.5-3.5Zm3.28-.97a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
