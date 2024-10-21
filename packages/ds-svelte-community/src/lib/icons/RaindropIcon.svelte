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
		d="M12.005 4.432 9.09 10.079c-1.01 2.015-1.84 3.68-1.84 5.358 0 2.71 2.106 4.813 4.74 4.813 2.639 0 4.76-2.107 4.76-4.813 0-1.676-.845-3.339-1.876-5.356l-.001-.002-2.868-5.647Zm-.003-2.182c.452 0 .722.314.84.52l.01.017 3.357 6.61.001.002.083.162c.957 1.871 1.957 3.825 1.957 5.876 0 3.526-2.784 6.313-6.26 6.313-3.478 0-6.24-2.79-6.24-6.313 0-2.05.982-4.004 1.924-5.88l.078-.154.003-.008 3.401-6.589c.114-.228.382-.556.846-.556Z"
		clip-rule="evenodd"
	/>
</svg>
