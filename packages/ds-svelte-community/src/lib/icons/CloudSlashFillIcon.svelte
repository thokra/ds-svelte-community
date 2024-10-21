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
		d="M19.335 6.226a.75.75 0 1 0-1.06-1.06L3.97 19.47a.75.75 0 1 0 1.06 1.06L19.335 6.226Zm-5.085.842a.24.24 0 0 0-.03-.37c-.897-.61-1.96-.948-3.165-.948-3.161 0-5.653 2.573-5.886 5.87v.001l-.001.019a.178.178 0 0 1-.135.16H5.03l-.01.003c-.814.216-1.51.602-2.008 1.17-.503.576-.762 1.295-.762 2.093 0 .925.342 1.75 1.012 2.332.068.06.139.116.212.169a.237.237 0 0 0 .307-.03L14.25 7.068ZM9.859 17.823a.25.25 0 0 0 .177.427h7.263c2.483 0 4.451-1.92 4.451-4.379 0-1.187-.465-2.297-1.352-3.104-.586-.533-1.334-.915-2.212-1.112a.244.244 0 0 0-.226.067l-8.1 8.101Z"
		clip-rule="evenodd"
	/>
</svg>
