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
		d="M8.392 3.47a.75.75 0 0 0-1.06 0L4.25 6.55a1.853 1.853 0 0 0 0 2.622L14.827 19.75a1.853 1.853 0 0 0 2.621 0l3.082-3.082a.75.75 0 0 0 0-1.06zM5.311 7.612l2.551-2.551 2.25 2.25-.021.02-1.104 1.104a.75.75 0 0 0 1.06 1.06l1.104-1.103.021-.021 1.699 1.698-.022.021-1.104 1.104a.75.75 0 0 0 1.061 1.06l1.104-1.103.02-.022 1.7 1.699-.023.021-1.103 1.104a.75.75 0 0 0 1.06 1.06l1.104-1.103.021-.022 2.25 2.25-2.551 2.551a.354.354 0 0 1-.5 0L5.311 8.112a.353.353 0 0 1 0-.5"
		clip-rule="evenodd"
	/>
</svg>
