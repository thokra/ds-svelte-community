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
		d="M12 2.25a.75.75 0 0 1 .672.418l2.765 5.601 6.181.899a.75.75 0 0 1 .416 1.279l-4.473 4.36 1.056 6.156a.75.75 0 0 1-1.088.791L12 18.847l-5.529 2.907a.75.75 0 0 1-1.088-.79l1.056-6.157-4.473-4.36a.75.75 0 0 1 .416-1.28l6.181-.898 2.764-5.6A.75.75 0 0 1 12 2.25Zm0 2.445L9.734 9.287a.75.75 0 0 1-.565.41l-5.068.737 3.667 3.574a.75.75 0 0 1 .216.664l-.866 5.047 4.533-2.383a.75.75 0 0 1 .698 0l4.533 2.383-.866-5.047a.75.75 0 0 1 .216-.664l3.667-3.574-5.068-.737a.75.75 0 0 1-.565-.41L12 4.695Z"
		clip-rule="evenodd"
	/>
</svg>
