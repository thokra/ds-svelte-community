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
		d="M6.59 2.843a.75.75 0 0 1 1.024.275l1 1.732a.75.75 0 0 1-1.3.75l-1-1.732a.75.75 0 0 1 .275-1.025Zm8.496 2.235a2.25 2.25 0 0 1 3.182 0l.757.758a2.25 2.25 0 0 1 0 3.182l-2.879 2.878a.75.75 0 1 0 1.061 1.061l2.879-2.879a3.75 3.75 0 0 0 0-5.303l-.758-.757a3.75 3.75 0 0 0-5.303 0l-2.879 2.878a.75.75 0 1 0 1.061 1.061l2.879-2.879Zm-7.482 7.63a.75.75 0 0 0-1.061-1.062l-2.379 2.38a3.75 3.75 0 0 0 0 5.302l.758.758a3.75 3.75 0 0 0 5.303 0l2.379-2.379a.75.75 0 1 0-1.061-1.06l-2.379 2.378a2.25 2.25 0 0 1-3.182 0l-.757-.757a2.25 2.25 0 0 1 0-3.182l2.379-2.379ZM2.844 6.59a.75.75 0 0 1 1.024-.275l1.732 1a.75.75 0 1 1-.75 1.3l-1.732-1a.75.75 0 0 1-.275-1.025Zm15.72 8.21a.75.75 0 0 0-.75 1.3l1.733 1a.75.75 0 0 0 .75-1.3l-1.733-1ZM16.1 17.816a.75.75 0 0 0-1.299.75l1 1.732a.75.75 0 0 0 1.3-.75l-1-1.732Z"
		clip-rule="evenodd"
	/>
</svg>
