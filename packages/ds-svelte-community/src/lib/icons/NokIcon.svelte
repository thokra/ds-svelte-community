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
		d="M3.304 8.276a.75.75 0 0 1 .844.346l2.102 3.604V9a.75.75 0 1 1 1.5 0v6a.75.75 0 0 1-1.398.378L4.25 11.774V15a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .554-.724M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m12.73-3.576a.75.75 0 0 1 .096 1.056l-2.1 2.52 2.1 2.52a.75.75 0 0 1-1.152.96l-2.174-2.609V15a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 1.5 0v2.129l2.174-2.61a.75.75 0 0 1 1.056-.095"
		clip-rule="evenodd"
	/>
</svg>
