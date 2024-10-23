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
		d="M14.01 3.051a2.75 2.75 0 0 0-4.02 0l-.788.844a1.25 1.25 0 0 1-.955.396l-1.154-.04a2.75 2.75 0 0 0-2.841 2.842l.039 1.154a1.25 1.25 0 0 1-.396.955l-.844.789a2.75 2.75 0 0 0 0 4.018l.844.788c.264.247.408.595.396.956l-.04 1.154a2.75 2.75 0 0 0 2.842 2.841l1.154-.039c.36-.012.709.132.955.396l.789.844a2.75 2.75 0 0 0 4.018 0l.789-.844a1.25 1.25 0 0 1 .955-.396l1.154.04a2.75 2.75 0 0 0 2.841-2.842l-.039-1.154a1.25 1.25 0 0 1 .396-.956l.844-.788a2.75 2.75 0 0 0 0-4.018l-.844-.789a1.25 1.25 0 0 1-.396-.955l.04-1.154a2.75 2.75 0 0 0-2.842-2.841l-1.154.039a1.25 1.25 0 0 1-.955-.396zm-2.923 1.024a1.25 1.25 0 0 1 1.826 0l.789.844a2.75 2.75 0 0 0 2.102.87l1.154-.038a1.25 1.25 0 0 1 1.291 1.291l-.039 1.154a2.75 2.75 0 0 0 .87 2.102l.845.789a1.25 1.25 0 0 1 0 1.826l-.844.789a2.75 2.75 0 0 0-.87 2.102l.038 1.154a1.25 1.25 0 0 1-1.291 1.291l-1.154-.039a2.75 2.75 0 0 0-2.102.87l-.789.845a1.25 1.25 0 0 1-1.826 0l-.789-.844a2.75 2.75 0 0 0-2.102-.87l-1.154.038a1.25 1.25 0 0 1-1.291-1.291l.039-1.154a2.75 2.75 0 0 0-.87-2.102l-.844-.789a1.25 1.25 0 0 1 0-1.826l.843-.789a2.75 2.75 0 0 0 .87-2.102l-.038-1.154a1.25 1.25 0 0 1 1.291-1.291l1.154.039a2.75 2.75 0 0 0 2.102-.87zm4.693 6.205a.75.75 0 1 0-1.06-1.06L11 12.94l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0z"
		clip-rule="evenodd"
	/>
</svg>
