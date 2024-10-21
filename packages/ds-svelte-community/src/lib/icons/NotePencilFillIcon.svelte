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
		d="M18.293 8.707a.25.25 0 0 0 0-.353l-2.646-2.647a.25.25 0 0 0-.354 0l-3.626 3.626a1 1 0 0 0-.242.391l-1.267 3.802a.25.25 0 0 0 .316.316l3.802-1.267a1 1 0 0 0 .39-.242l3.627-3.626Zm1.06-1.414a.25.25 0 0 0 .354 0L20.5 6.5a2.121 2.121 0 0 0-3-3l-.793.793a.25.25 0 0 0 0 .353l2.647 2.647Zm-4.151-3.616a.25.25 0 0 0-.177-.427H5A1.75 1.75 0 0 0 3.25 5v14c0 .966.784 1.75 1.75 1.75h14A1.75 1.75 0 0 0 20.75 19V8.975a.25.25 0 0 0-.427-.177l-4.595 4.596a2.5 2.5 0 0 1-.978.604l-3.801 1.267c-1.368.456-2.67-.846-2.214-2.214l1.267-3.801a2.5 2.5 0 0 1 .604-.978l4.596-4.595Z"
		clip-rule="evenodd"
	/>
</svg>
