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
		d="M13.737 3.177a1.75 1.75 0 0 0-2.474 0L5.97 8.47a.75.75 0 0 0 0 1.06l1.085 1.086a2.75 2.75 0 0 0 3.89 0L12 9.561l5.47 5.47c.14.14.331.22.53.22h3a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-5.69l-1.573-1.574ZM7.672 4.75a.25.25 0 0 1 .176.427L5.263 7.763a1.75 1.75 0 0 0 0 2.475l1.085 1.085a3.75 3.75 0 0 0 5.304 0l.171-.171a.25.25 0 0 1 .354 0l4.586 4.586A1.75 1.75 0 0 0 18 16.25h2.481c.09 0 .175.049.215.13.18.362.276.737.288 1.111a2.41 2.41 0 0 1-2.493 2.493c-.615-.02-1.233-.266-1.789-.74l-5.348-5.348a.5.5 0 0 0-.708.708l5.634 5.633a.03.03 0 0 1 0 .043 2.41 2.41 0 0 1-1.789.704c-.615-.02-1.233-.266-1.789-.739l-3.848-3.849a.5.5 0 0 0-.708.708l3.634 3.633a.03.03 0 0 1 0 .043 2.41 2.41 0 0 1-1.789.704c-.702-.023-1.408-.34-2.021-.954L2.44 15a.749.749 0 0 1-.191-.5v-9A.75.75 0 0 1 3 4.75h4.672Z"
		clip-rule="evenodd"
	/>
</svg>
