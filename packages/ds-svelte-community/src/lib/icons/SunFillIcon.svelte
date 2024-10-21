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
		d="M12 1.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM4.752 4.752a.75.75 0 0 1 1.061 0l1.414 1.414a.75.75 0 0 1-1.06 1.061L4.752 5.813a.75.75 0 0 1 0-1.06ZM1.75 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm17.75-.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Zm-2.727 5.523a.75.75 0 0 1 1.06 0l1.415 1.414a.75.75 0 0 1-1.06 1.06l-1.415-1.413a.75.75 0 0 1 0-1.061ZM12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Zm7.248-.937a.75.75 0 0 0-1.061-1.06l-1.414 1.413a.75.75 0 1 0 1.06 1.061l1.415-1.414ZM12 18.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-4.773-.916a.75.75 0 0 0-1.06-1.061l-1.415 1.414a.75.75 0 0 0 1.06 1.06l1.415-1.413Z"
		clip-rule="evenodd"
	/>
</svg>
