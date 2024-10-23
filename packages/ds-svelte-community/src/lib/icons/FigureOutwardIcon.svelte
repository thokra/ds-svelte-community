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
		d="M10.75 5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M9.97 9.916a.25.25 0 0 1 .235-.166h3.59c.106 0 .2.066.236.166l1.905 5.334H13.5a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-4.25H17a.75.75 0 0 0 .706-1.002L15.443 9.41a1.75 1.75 0 0 0-1.648-1.161h-3.59c-.74 0-1.4.465-1.648 1.161l-2.263 6.337A.75.75 0 0 0 7 16.75h2.75V21a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75H8.064z"
		clip-rule="evenodd"
	/>
</svg>
