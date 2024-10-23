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
		d="M3.002 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h17.996a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm9.748 12.772V9.75h7.498v10.5H12.75zm-8.998.728v4.5h7.498v-4.5zm7.498-1.5H3.752V3.75h7.498zm8.998-6H12.75v-4.5h7.498z"
		clip-rule="evenodd"
	/>
</svg>
