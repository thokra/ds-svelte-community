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
		d="M3.905 12q.103.14.243.317c.35.438.878 1.025 1.582 1.61C7.136 15.098 9.222 16.25 12 16.25s4.864-1.152 6.27-2.323A11.3 11.3 0 0 0 20.095 12a11.3 11.3 0 0 0-1.825-1.927C16.864 8.902 14.778 7.75 12 7.75s-4.864 1.152-6.27 2.323A11.3 11.3 0 0 0 3.905 12M12 7.75a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5M4.77 8.92C6.364 7.593 8.778 6.25 12 6.25s5.636 1.343 7.23 2.67a13 13 0 0 1 1.793 1.826 10 10 0 0 1 .576.796l.035.056.007.012.007.012.012.022.016.03c.004.01.015.033.02.048.013.032.046.17.054.278a1.4 1.4 0 0 1-.053.278l-.021.047-.016.031-.008.015-.004.007-.009.015-.005.009a4 4 0 0 1-.155.238c-.104.152-.255.363-.456.614-.4.5-.997 1.163-1.793 1.826-1.594 1.327-4.008 2.67-7.23 2.67s-5.636-1.343-7.23-2.67a13 13 0 0 1-1.793-1.826 10 10 0 0 1-.576-.796l-.05-.08-.011-.022-.037-.078A1.4 1.4 0 0 1 2.25 12c.008-.108.041-.246.053-.278l.037-.078.012-.022.05-.08q.04-.069.12-.182a10 10 0 0 1 .455-.614c.4-.5.997-1.163 1.793-1.826m7.23.33a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m0 1.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
		clip-rule="evenodd"
	/>
</svg>
