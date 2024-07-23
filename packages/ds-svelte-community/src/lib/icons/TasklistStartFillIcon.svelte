<script lang="ts" context="module">
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
		d="M4.25 3.5c0-.69.56-1.25 1.25-1.25h13c.69 0 1.25.56 1.25 1.25v11.247c0 .212-.253.334-.435.225a3.472 3.472 0 0 0-1.11-.428l-1.405-.281a.25.25 0 0 1-.2-.245v-1.27a2.748 2.748 0 0 0-5.497 0v1.427c0 .155-.14.272-.295.263a2.648 2.648 0 0 0-2.363 4.111l1.874 2.812a.25.25 0 0 1-.208.389H5.5c-.69 0-1.25-.56-1.25-1.25v-17ZM12.37 7a.75.75 0 0 1 .75-.75h2.5a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm-1.15-.55a.75.75 0 1 0-1.2-.9l-.81 1.078a.25.25 0 0 1-.377.026L8.65 6.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.13-.08l1.5-2Zm.955 10.545a.25.25 0 0 0 .428-.176v-4.07a1.248 1.248 0 0 1 2.496 0v2.703l2.812.563a1.976 1.976 0 0 1 1.505 2.505l-.805 2.683a.25.25 0 0 1-.24.178H12.27a.25.25 0 0 1-.208-.111l-2.368-3.553a1.148 1.148 0 0 1 1.771-1.442l.711.72Z"
		clip-rule="evenodd"
	/>
</svg>
