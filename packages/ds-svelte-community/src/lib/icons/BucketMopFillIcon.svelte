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
		d="M17 3.25a.75.75 0 0 1 .75.75v12.25H20a.75.75 0 0 1 .369 1.403l.827 2.069a.75.75 0 0 1-.696 1.028h-7a.75.75 0 0 1-.696-1.029l.827-2.068A.75.75 0 0 1 14 16.25h2.25V4a.75.75 0 0 1 .75-.75Zm-6.764 17.462a.75.75 0 0 0 .506-.606l.929-6.5a.75.75 0 0 0-.048-.39c-.143-.35-.423-.594-.683-.76a3.884 3.884 0 0 0-.942-.414c-.694-.213-1.567-.333-2.498-.333-.93 0-1.804.12-2.498.333a3.881 3.881 0 0 0-.942.415c-.26.165-.54.41-.683.76a.75.75 0 0 0-.048.39l.928 6.5a.75.75 0 0 0 .506.605l.077.024a13.38 13.38 0 0 0 .855.242c.51.127 1.21.272 1.805.272s1.294-.145 1.805-.272a15.054 15.054 0 0 0 .855-.242l.076-.024Zm-4.581-7.296a.085.085 0 0 0 0 .168 7.682 7.682 0 0 0 1.845.207c.718 0 1.364-.082 1.865-.212a.08.08 0 0 0 0-.158A7.64 7.64 0 0 0 7.5 13.21c-.708 0-1.346.08-1.845.207Z"
		clip-rule="evenodd"
	/>
</svg>
