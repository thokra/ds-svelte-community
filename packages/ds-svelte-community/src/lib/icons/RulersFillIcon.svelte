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
		d="M7.81 3.706a.75.75 0 0 1 .69-.456H20a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.291.519l-11.5-12a.75.75 0 0 1-.149-.813Zm7.497 3.257A.75.75 0 0 1 16 6.5h.75a.75.75 0 0 1 .75.75V8a.75.75 0 0 1-1.28.53l-.75-.75a.75.75 0 0 1-.163-.817ZM5.97 5.97a.75.75 0 0 1 1.06 0l11 11a.75.75 0 0 1 0 1.06l-2.793 2.793a1.75 1.75 0 0 1-2.475 0l-9.585-9.586a1.75 1.75 0 0 1 0-2.474L5.97 5.97Zm2.646 3.707a.25.25 0 0 0-.354 0l-.792.793a.75.75 0 0 0 1.06 1.06l.793-.793a.25.25 0 0 0 0-.353l-.707-.707Zm2.5 2.5a.25.25 0 0 0-.354 0l-.792.793a.75.75 0 0 0 1.06 1.06l.793-.793a.25.25 0 0 0 0-.353l-.707-.707Zm2.5 2.5a.25.25 0 0 0-.354 0l-.792.793a.75.75 0 0 0 1.06 1.06l.793-.793a.25.25 0 0 0 0-.353l-.707-.707Z"
		clip-rule="evenodd"
	/>
</svg>
