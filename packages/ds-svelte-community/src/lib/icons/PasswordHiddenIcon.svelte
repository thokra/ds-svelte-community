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
		d="M4.149 12.5a.75.75 0 0 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3l-.607-.35.607-.35a.75.75 0 1 0-.75-1.3l-.607.35v-.7a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 0 0-.75 1.298l.607.35-.607.351a.75.75 0 1 0 .75 1.3l.607-.351v.701ZM3 15.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5H3Zm9-2a.75.75 0 0 1-.75-.75v-.701l-.607.35a.75.75 0 0 1-.75-1.298l.607-.351-.607-.35a.75.75 0 1 1 .75-1.3l.607.35v-.7a.75.75 0 0 1 1.5 0v.7l.607-.35a.75.75 0 1 1 .75 1.3l-.607.35.607.35a.75.75 0 1 1-.75 1.3l-.607-.351v.701a.75.75 0 0 1-.75.75Zm6.351-.75a.75.75 0 0 0 1.5 0v-.701l.608.35a.75.75 0 0 0 .75-1.298L20.6 10.5l.607-.35a.75.75 0 0 0-.75-1.3l-.607.35v-.7a.75.75 0 0 0-1.5 0v.7l-.607-.35a.75.75 0 1 0-.75 1.3l.607.35-.607.35a.75.75 0 1 0 .75 1.3l.607-.351v.701Z"
		clip-rule="evenodd"
	/>
</svg>
