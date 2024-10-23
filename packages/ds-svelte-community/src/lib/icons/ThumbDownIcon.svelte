<script lang="ts" module>
	import newUniqueId from "$lib/components/local-unique-id";
</script>

<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		/**
		 * Title of the icon, used for accessibility
		 */
		title?: string;

		children?: Snippet;

		[key: string]: unknown;
	};

	let { title, children, ...restProps }: Props = $props();

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
	{...restProps}
>
	{#if title}
		<title {id}>{title}</title>
	{/if}
	{#if children}
		{@render children()}
	{/if}
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M11.353 3.265a1 1 0 0 1 .147-.015h5.472c1.24 0 2.327.83 2.653 2.026l1.91 7a2.75 2.75 0 0 1-2.654 3.474h-5.34l.793 2.38a2.75 2.75 0 0 1-2.609 3.62H10.5a.75.75 0 0 1-.624-.334L6.099 15.75H3a.75.75 0 0 1-.75-.75V5A.75.75 0 0 1 3 4.25h3.426zm.221 1.485-4.927.985a1 1 0 0 1-.147.015H3.75v8.5H6.5a.75.75 0 0 1 .624.334l3.777 5.666h.824a1.25 1.25 0 0 0 1.186-1.645l-1.122-3.368a.75.75 0 0 1 .711-.987h6.381a1.25 1.25 0 0 0 1.206-1.579l-1.909-7a1.25 1.25 0 0 0-1.206-.921z"
		clip-rule="evenodd"
	/>
</svg>
