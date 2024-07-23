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
		d="M4.148 12.317A9.495 9.495 0 0 1 3.905 12a11.283 11.283 0 0 1 1.825-1.927C7.136 8.902 9.222 7.75 12 7.75a4.25 4.25 0 0 0 0 8.5c-2.778 0-4.864-1.152-6.27-2.323a11.283 11.283 0 0 1-1.582-1.61ZM12 16.25a4.25 4.25 0 0 0 0-8.5c2.778 0 4.864 1.152 6.27 2.323A11.28 11.28 0 0 1 20.095 12a11.28 11.28 0 0 1-1.825 1.927c-1.406 1.171-3.492 2.323-6.27 2.323Zm0-10c-3.222 0-5.636 1.343-7.23 2.67a12.789 12.789 0 0 0-1.793 1.826 10.2 10.2 0 0 0-.576.796 3.165 3.165 0 0 0-.05.08l-.011.022a.716.716 0 0 0-.037.078c-.012.032-.045.17-.053.278.008.108.041.246.053.278a1.343 1.343 0 0 0 .037.078l.012.022a1.36 1.36 0 0 0 .05.08 10.2 10.2 0 0 0 .576.795c.398.501.996 1.164 1.792 1.827 1.594 1.327 4.008 2.67 7.23 2.67 3.222 0 5.636-1.343 7.23-2.67a12.796 12.796 0 0 0 1.793-1.826 10.207 10.207 0 0 0 .576-.796l.035-.056.005-.009.01-.015a.698.698 0 0 0 .011-.022l.016-.03c.004-.01.015-.033.02-.048A1.33 1.33 0 0 0 21.75 12a1.399 1.399 0 0 0-.053-.278 1.273 1.273 0 0 0-.021-.047c-.007-.016-.014-.027-.016-.031a.698.698 0 0 0-.02-.034l-.006-.012a3.647 3.647 0 0 0-.155-.238 10.207 10.207 0 0 0-.456-.614c-.4-.5-.997-1.163-1.793-1.826-1.594-1.327-4.008-2.67-7.23-2.67ZM9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z"
		clip-rule="evenodd"
	/>
</svg>
