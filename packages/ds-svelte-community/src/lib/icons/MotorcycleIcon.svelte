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
		d="M11.378 9.25a2.25 2.25 0 0 1 2.015-1.498l-.59-1.473A.75.75 0 0 1 13.5 5.25h.5A5.75 5.75 0 0 1 19.75 11v.5a.75.75 0 0 1-.75.75h-1q-.3 0-.588.046l.361.963q.112-.009.227-.009a2.75 2.75 0 1 1-1.631.536l-.361-.963A3.75 3.75 0 0 0 14.25 16a.75.75 0 0 1-.75.75H8.646a2.751 2.751 0 1 1 0-1.5h1.029a3.75 3.75 0 0 0-3.675-3h-.5a.75.75 0 0 1-.67-.415l-1.5-3A.75.75 0 0 1 4 7.75h1.879c1.45 0 2.845.537 3.92 1.5zm3.248-2.454a4.25 4.25 0 0 1 3.617 3.954H18a5.25 5.25 0 0 0-5.197 4.5h-1.606A5.25 5.25 0 0 0 6 10.75h-.036l-.75-1.5h.665c1.159 0 2.27.46 3.09 1.28a.75.75 0 0 0 .531.22H12a.75.75 0 0 0 .75-.75.75.75 0 0 1 .75-.75h.983a.74.74 0 0 0 .638-.33.75.75 0 0 0 .069-.714zM6 14.75c.409 0 .772.196 1 .5H6a.75.75 0 0 0 0 1.5h1a1.25 1.25 0 1 1-1-2m10.947.577a1.25 1.25 0 1 0 1.404-.527l.351.937a.75.75 0 1 1-1.404.526z"
		clip-rule="evenodd"
	/>
</svg>
