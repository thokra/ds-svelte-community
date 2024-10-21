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
		d="M10 2.25a.75.75 0 0 1 .75.75v1.83c.267.575.614 1.508.894 2.293.153.43.292.83.394 1.127H16c1.307 0 2.157.678 2.643 1.49.1.165.185.337.256.51H20c.966 0 1.75.784 1.75 1.75v3a.75.75 0 0 1-1.5 0v-3a.25.25 0 0 0-.25-.25h-.758c.005.088.008.172.008.25 0 .596-.144 1.49-.607 2.26-.396.662-1.033 1.234-1.963 1.424l1.26 2.519c.354-.311.68-.651.977-1.017a.75.75 0 0 1 1.166.943 9.733 9.733 0 0 1-7.583 3.62 9.733 9.733 0 0 1-7.583-3.62.75.75 0 1 1 1.166-.944c.296.367.623.707.977 1.018l1.274-2.55a2.942 2.942 0 0 1-1.24-.748c-.48-.48-.844-1.161-.844-1.905V9.885l-2.127.355a.75.75 0 0 1-.458-.07s.034.02-.038-.019a2.138 2.138 0 0 1-.234-.153 2.67 2.67 0 0 1-.479-.467C2.566 9.095 2.25 8.432 2.25 7.5c0-.932.316-1.595.664-2.031a2.668 2.668 0 0 1 .654-.586 1.816 1.816 0 0 1 .09-.05l-.004.002h-.002L6.665 3.33c.718-.359 1.556-.338 2.26-.103.109.036.218.079.325.127V3a.75.75 0 0 1 .75-.75ZM8.29 19.097a8.211 8.211 0 0 0 4.21 1.153 8.21 8.21 0 0 0 4.21-1.153l-1.673-3.347H9.963L8.29 19.097Z"
		clip-rule="evenodd"
	/>
</svg>
