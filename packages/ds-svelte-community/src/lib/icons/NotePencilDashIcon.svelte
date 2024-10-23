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
		d="M16.97 2.97a2.871 2.871 0 1 1 4.06 4.06l-1.5 1.5-4.5 4.5a.75.75 0 0 1-.293.181l-4.5 1.5a.75.75 0 0 1-.949-.948l1.5-4.5a.75.75 0 0 1 .182-.293l4.497-4.497.003-.003.003-.003zM16 6.06l-3.844 3.845-.97 2.91 2.909-.97L17.939 8zm3 .88L17.06 5l.97-.97a1.371 1.371 0 0 1 1.94 1.94zM3.25 5c0-.966.784-1.75 1.75-1.75h1.75a.75.75 0 0 1 0 1.5H5a.25.25 0 0 0-.25.25v1.75a.75.75 0 0 1-1.5 0zM9.5 4a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5h-1.75A.75.75 0 0 1 9.5 4M4 9.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 4 9.5m16 1.75a.75.75 0 0 1 .75.75v1.75a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75M4 16.5a.75.75 0 0 1 .75.75V19c0 .138.112.25.25.25h1.75a.75.75 0 0 1 0 1.5H5A1.75 1.75 0 0 1 3.25 19v-1.75A.75.75 0 0 1 4 16.5m16 0a.75.75 0 0 1 .75.75V19A1.75 1.75 0 0 1 19 20.75h-1.75a.75.75 0 0 1 0-1.5H19a.25.25 0 0 0 .25-.25v-1.75a.75.75 0 0 1 .75-.75M9.5 20a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 9.5 20"
		clip-rule="evenodd"
	/>
</svg>
