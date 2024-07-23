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
		d="M5.25 4A.75.75 0 0 1 6 3.25h12a.75.75 0 0 1 0 1.5h-.298c-.109 1.966-.643 3.846-1.546 5.302-.503.81-1.116 1.479-1.81 1.948.694.47 1.307 1.138 1.81 1.948.904 1.456 1.437 3.336 1.546 5.302H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h.315c.109-1.966.642-3.846 1.546-5.302.502-.81 1.116-1.479 1.81-1.948-.694-.47-1.308-1.138-1.81-1.948-.904-1.456-1.437-3.336-1.546-5.302H6A.75.75 0 0 1 5.25 4Zm9.631 5.261c-.846 1.365-1.901 1.989-2.873 1.989-.971 0-2.026-.624-2.872-1.989-.738-1.189-1.211-2.785-1.318-4.511h8.381c-.107 1.726-.58 3.322-1.318 4.511ZM9.136 14.74c.846-1.365 1.901-1.989 2.872-1.989.972 0 2.027.624 2.873 1.989.738 1.189 1.211 2.784 1.318 4.511H7.818c.107-1.727.58-3.322 1.318-4.511ZM8.645 5.5c.176 1.306.576 2.477 1.128 3.366.762 1.228 1.61 1.634 2.236 1.634.626 0 1.473-.406 2.235-1.634.552-.89.952-2.06 1.129-3.366H8.645Z"
		clip-rule="evenodd"
	/>
</svg>
