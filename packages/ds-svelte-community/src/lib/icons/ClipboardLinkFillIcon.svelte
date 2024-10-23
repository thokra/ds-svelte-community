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
		d="M9.5 2.25a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm-2 2a.25.25 0 0 1 .25.25v2c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75v-2a.25.25 0 0 1 .25-.25H18a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V5A.75.75 0 0 1 6 4.25zm6.091 6.598a.25.25 0 0 1 .354 0l.707.707a.25.25 0 0 1 0 .354L12.53 14.03a.25.25 0 0 1-.353 0 .75.75 0 0 0-1.06 1.061l.353.354a1.25 1.25 0 0 0 1.767 0l2.829-2.829a1.25 1.25 0 0 0 0-1.768l-1.414-1.414a1.25 1.25 0 0 0-1.768 0l-.354.354a.75.75 0 0 0 1.061 1.06M11.47 12.97a.25.25 0 0 1 .353 0 .75.75 0 0 0 1.06-1.061l-.353-.354a1.25 1.25 0 0 0-1.767 0l-2.829 2.829a1.25 1.25 0 0 0 0 1.768l1.414 1.414a1.25 1.25 0 0 0 1.768 0l.354-.354a.75.75 0 0 0-1.061-1.06.25.25 0 0 1-.354 0l-.707-.708a.25.25 0 0 1 0-.353z"
		clip-rule="evenodd"
	/>
</svg>
