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
		d="M12.33 2.992a.75.75 0 0 1-.607.87A7.252 7.252 0 0 0 5.75 11v.11l-1.242 4.14H6a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h3a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-.75H8A2.75 2.75 0 0 1 5.25 18v-1.25H3.5a.75.75 0 0 1-.718-.966l1.469-4.897a8.753 8.753 0 0 1 7.21-8.502.75.75 0 0 1 .869.607Zm8.333 5.583a.75.75 0 0 1 .891.576A8.78 8.78 0 0 1 21.75 11a8.717 8.717 0 0 1-2 5.568V21.5a.75.75 0 0 1-1.5 0v-5.492l.188-.213A7.22 7.22 0 0 0 20.25 11a7.28 7.28 0 0 0-.162-1.534.75.75 0 0 1 .575-.89ZM15.25 2.75a3 3 0 0 0-2.959 2.5h-.041a2 2 0 1 0 0 4h5.5a2.5 2.5 0 0 0 .1-4.998 2.998 2.998 0 0 0-2.6-1.502Zm-1.5 3a1.5 1.5 0 0 1 2.915-.5c.106.3.39.5.707.5h.378a1 1 0 1 1 0 2h-5.5a.5.5 0 0 1 0-1H13a.75.75 0 0 0 .75-.75v-.25Z"
		clip-rule="evenodd"
	/>
</svg>
