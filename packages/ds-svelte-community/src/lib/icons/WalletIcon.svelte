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
		d="M15.803 2.276a.75.75 0 0 1 .868.389l1.293 2.585H19c.966 0 1.75.784 1.75 1.75v2.418c.591.281 1 .884 1 1.582v3c0 .698-.409 1.3-1 1.582V18A1.75 1.75 0 0 1 19 19.75H4A1.75 1.75 0 0 1 2.25 18V7c0-.966.784-1.75 1.75-1.75h.9l10.903-2.974Zm-.199 1.61.683 1.364H10.6l5.004-1.365ZM3.75 7A.25.25 0 0 1 4 6.75h15a.25.25 0 0 1 .25.25v2.25h-3.917a1.944 1.944 0 0 0-.138.007 3.52 3.52 0 0 0-1.37.393 2.856 2.856 0 0 0-1.093 1.006c-.305.486-.482 1.097-.482 1.844 0 .747.177 1.358.482 1.844.304.483.706.8 1.093 1.006a3.518 3.518 0 0 0 1.508.4h3.917V18a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25V7Zm11.603 3.75H20a.25.25 0 0 1 .25.25v3a.25.25 0 0 1-.25.25h-4.647c-.007 0-.02 0-.037-.002h-.007a2.023 2.023 0 0 1-.78-.222 1.356 1.356 0 0 1-.526-.48c-.136-.216-.253-.543-.253-1.046s.117-.83.253-1.047a1.35 1.35 0 0 1 .525-.478 2.023 2.023 0 0 1 .825-.225Zm.147 1a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5h-.01Z"
		clip-rule="evenodd"
	/>
</svg>
