<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
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
		d="M8.392 3.47a.75.75 0 0 0-1.06 0L4.25 6.55a1.853 1.853 0 0 0 0 2.622L14.827 19.75a1.854 1.854 0 0 0 2.621 0l3.082-3.082a.75.75 0 0 0 0-1.06L8.392 3.47Zm1.699 3.862a.03.03 0 0 1 .043 0L11.15 8.35a.03.03 0 0 1 0 .042l-1.103 1.104a.75.75 0 1 1-1.06-1.06l1.103-1.104Zm2.758 2.758a.03.03 0 0 1 .043 0l1.017 1.018a.03.03 0 0 1 0 .043l-1.103 1.104a.75.75 0 0 1-1.06-1.061l1.103-1.104Zm2.758 2.76a.03.03 0 0 1 .044 0l1.017 1.016a.03.03 0 0 1 0 .044l-1.103 1.103a.75.75 0 0 1-1.061-1.06l1.103-1.104Z"
		clip-rule="evenodd"
	/>
</svg>
