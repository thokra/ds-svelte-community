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
		d="M8.272 4.818A.75.75 0 0 1 9 4.25h12a.75.75 0 0 1 0 1.5H9.586L6.228 19.182a.75.75 0 0 1-1.434.07l-2.5-7a.75.75 0 0 1 1.412-.504l1.667 4.667 2.9-11.597Zm4.33 3.546a.75.75 0 0 1 1.034.239l1.864 2.982 1.864-2.982a.75.75 0 1 1 1.272.795L16.384 13l2.252 3.602a.75.75 0 1 1-1.272.796L15.5 14.415l-1.864 2.983a.75.75 0 1 1-1.272-.796L14.616 13l-2.252-3.602a.75.75 0 0 1 .238-1.034Z"
		clip-rule="evenodd"
	/>
</svg>
