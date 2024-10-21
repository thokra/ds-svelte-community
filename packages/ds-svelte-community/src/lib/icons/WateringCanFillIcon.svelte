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
		d="M9.77 6.22c-.025.226-.031.42-.03.566-.303.314-.49.742-.49 1.214v1.543l-1.13-.807a.25.25 0 0 0-.322.026l-2.46 2.46a.25.25 0 0 0-.015.337l3.927 4.713V19.5c0 .69.56 1.25 1.25 1.25h9c.69 0 1.25-.56 1.25-1.25V11c0-.716-.158-1.394-.441-2.003a7.92 7.92 0 0 0 .212-.67c.153-.57.299-1.366.226-2.205-.074-.847-.376-1.77-1.15-2.514-.769-.74-1.92-1.221-3.535-1.355-1.589-.133-2.815.06-3.755.475-.95.419-1.566 1.046-1.953 1.704A4.548 4.548 0 0 0 9.77 6.22Zm9.483.032c.036.418-.003.84-.074 1.219A4.732 4.732 0 0 0 16 6.25h-4.72c.049-.319.154-.697.366-1.057.238-.405.622-.809 1.266-1.093.653-.288 1.615-.47 3.026-.353 1.386.116 2.171.51 2.62.942.445.428.643.973.695 1.563Zm-14.82-.246a1.25 1.25 0 0 1 2.045.42l.378.944a.25.25 0 0 1-.056.27L4.14 10.3a.25.25 0 0 1-.27.056l-.944-.378a1.25 1.25 0 0 1-.42-2.044l1.928-1.928Z"
		clip-rule="evenodd"
	/>
</svg>
