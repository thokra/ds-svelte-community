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
		d="M16.538 1.636a.75.75 0 0 0-1.312 0l-5 9a.75.75 0 0 0 .656 1.114h10a.75.75 0 0 0 .656-1.114l-5-9Zm-.656 1.908 3.725 6.706h-7.45l3.725-6.706Zm-7.594.219A.75.75 0 0 1 9 3.25h2.25a.75.75 0 0 1 0 1.5H9.54l-.828 2.487A.75.75 0 0 1 8 7.75H4a.25.25 0 0 0-.25.25v10c0 .138.112.25.25.25h16a.25.25 0 0 0 .25-.25v-3.898a.75.75 0 1 1 1.5 0V18A1.75 1.75 0 0 1 20 19.75H4A1.75 1.75 0 0 1 2.25 18V8c0-.966.784-1.75 1.75-1.75h3.46l.828-2.487Zm.031 10.862A4.25 4.25 0 0 1 7.75 12.5a.75.75 0 1 1 1.5 0 2.75 2.75 0 0 0 5.235 1.179.75.75 0 1 1 1.355.642 4.25 4.25 0 0 1-7.52.304Z"
		clip-rule="evenodd"
	/>
</svg>
