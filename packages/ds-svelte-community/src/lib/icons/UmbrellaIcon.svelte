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
		d="M6 8.25c-.51 0-1.01.095-1.463.23a8.252 8.252 0 0 1 14.926 0A5.204 5.204 0 0 0 18 8.25c-.901 0-1.763.296-2.367.565a8.42 8.42 0 0 0-.633.314 8.44 8.44 0 0 0-.633-.314c-.604-.269-1.466-.565-2.367-.565s-1.763.296-2.367.565c-.249.11-.464.22-.633.314a8.428 8.428 0 0 0-.633-.314C7.763 8.546 6.901 8.25 6 8.25Zm8.37 2.245c.105.06.162.095.214.129a.75.75 0 0 0 .832 0 6.87 6.87 0 0 1 .826-.439c.52-.231 1.16-.435 1.758-.435.916 0 1.894.473 2.368.744a.75.75 0 0 0 1.1-.83C20.42 5.406 16.58 2.25 12 2.25S3.58 5.407 2.532 9.663a.75.75 0 0 0 1.1.83c.474-.27 1.452-.743 2.368-.743.599 0 1.237.204 1.758.435a6.877 6.877 0 0 1 .826.44.75.75 0 0 0 .832-.001 6.876 6.876 0 0 1 .826-.439c.52-.231 1.16-.435 1.758-.435.599 0 1.237.204 1.758.435.254.113.465.226.612.31ZM12 11.25a.75.75 0 0 1 .75.75v6.995a1.71 1.71 0 0 0 .17.67c.081.16.19.299.34.399.145.096.371.186.74.186s.595-.09.74-.186c.15-.1.259-.238.34-.4a1.71 1.71 0 0 0 .17-.669V18.5a.75.75 0 0 1 1.5 0v.547a3.206 3.206 0 0 1-.328 1.288c-.17.34-.437.701-.85.976-.417.279-.94.439-1.572.439-.631 0-1.155-.16-1.572-.439a2.504 2.504 0 0 1-.849-.976A3.206 3.206 0 0 1 11.25 19v-7a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
