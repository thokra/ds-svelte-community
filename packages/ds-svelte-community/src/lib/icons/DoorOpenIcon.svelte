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
		d="M4.545 2.404a.75.75 0 0 1 .505-.152.757.757 0 0 1 .05-.002H19a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3.75H10.6l5.597 1.526A.75.75 0 0 1 16.75 6v15a.75.75 0 0 1-1.5 0V6.573l-9.5-2.591V21a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .295-.596ZM12.75 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
		clip-rule="evenodd"
	/>
</svg>
