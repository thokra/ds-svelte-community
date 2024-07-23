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
		d="M14.009 3.051a2.75 2.75 0 0 0-4.018 0l-.789.844a1.25 1.25 0 0 1-.955.396l-1.154-.04A2.75 2.75 0 0 0 4.25 7.094l.04 1.154a1.25 1.25 0 0 1-.396.955l-.844.789a2.75 2.75 0 0 0 0 4.018l.844.788c.263.247.408.595.395.956l-.039 1.154a2.75 2.75 0 0 0 2.842 2.841l1.154-.039c.36-.012.709.132.955.396l.789.844a2.75 2.75 0 0 0 4.018 0l.788-.844a1.25 1.25 0 0 1 .956-.396l1.154.04a2.75 2.75 0 0 0 2.841-2.842l-.039-1.154a1.25 1.25 0 0 1 .396-.956l.843-.788a2.75 2.75 0 0 0 0-4.018l-.843-.789a1.25 1.25 0 0 1-.396-.955l.039-1.154a2.75 2.75 0 0 0-2.841-2.841l-1.154.039a1.25 1.25 0 0 1-.956-.396l-.788-.844ZM8.719 8.72a.75.75 0 0 1 1.061 0L12 10.94l2.22-2.22a.75.75 0 1 1 1.06 1.06L13.06 12l2.22 2.22a.75.75 0 1 1-1.06 1.06L12 13.06l-2.22 2.22a.75.75 0 0 1-1.06-1.06L10.94 12 8.72 9.78a.75.75 0 0 1 0-1.06Z"
		clip-rule="evenodd"
	/>
</svg>
