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
		d="M1.57 12.53a.75.75 0 0 1 0-1.06l9.9-9.9a.75.75 0 0 1 1.06 0l9.9 9.9a.75.75 0 0 1 0 1.06l-9.9 9.9a.75.75 0 0 1-1.06 0l-9.9-9.9Zm9.179-2.632c0-.43.14-.729.33-.92.19-.19.49-.33.92-.33.43 0 .73.14.92.33.19.191.33.49.33.92 0 .083-.033.206-.173.402-.144.202-.347.407-.607.668l-.02.02c-.236.236-.524.523-.748.837-.235.329-.452.756-.452 1.273v.4a.75.75 0 0 0 1.5 0v-.4c0-.082.033-.205.173-.401.144-.203.347-.408.607-.668l.02-.02c.236-.236.524-.524.748-.837.235-.33.452-.756.452-1.274 0-.77-.26-1.47-.77-1.98s-1.21-.77-1.98-.77-1.47.26-1.98.77-.77 1.21-.77 1.98a.75.75 0 0 0 1.5 0Zm1.25 5.054a.95.95 0 1 0 0 1.9.95.95 0 0 0 0-1.9Z"
		clip-rule="evenodd"
	/>
</svg>
