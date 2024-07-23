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
		d="M3.25 5A.75.75 0 0 1 4 4.25h4a.75.75 0 0 1 .75.75v.992a1.24 1.24 0 0 0 .023.167c.026.126.078.287.175.444.166.265.542.647 1.552.647s1.386-.382 1.552-.647a1.371 1.371 0 0 0 .198-.61V5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v3.547c.346-.15.788-.297 1.25-.297 1.518 0 2.75 1.448 2.75 3.25s-1.232 3.25-2.75 3.25c-.462 0-.904-.147-1.25-.297V17a.75.75 0 0 1-.75.75h-3.547c.15.346.297.788.297 1.25 0 .718-.342 1.512-.873 2.119-.544.621-1.361 1.131-2.377 1.131-1.016 0-1.833-.51-2.377-1.131-.531-.607-.873-1.401-.873-2.119 0-.462.147-.904.297-1.25H4a.75.75 0 0 1-.75-.75V5Z"
		clip-rule="evenodd"
	/>
</svg>
