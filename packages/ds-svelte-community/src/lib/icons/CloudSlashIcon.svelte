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
		d="M19.335 5.165a.75.75 0 0 1 0 1.06L5.03 20.53a.75.75 0 0 1-1.06-1.06L18.274 5.165a.75.75 0 0 1 1.06 0m-8.28 2.095c-2.273 0-4.204 1.855-4.39 4.466l-.748-.053.748.053c-.022.322-.098.686-.351.994-.255.31-.597.453-.914.533-.595.159-1.003.413-1.259.705-.25.285-.391.646-.391 1.103 0 .612.243 1.045.654 1.317a.75.75 0 1 1-.83 1.25c-.865-.574-1.324-1.497-1.324-2.567 0-.797.259-1.516.763-2.091.497-.567 1.193-.952 2.006-1.168l.011-.003a1 1 0 0 0 .12-.038 1 1 0 0 0 .02-.14c.232-3.294 2.725-5.861 5.885-5.861 1.04 0 1.992.252 2.83.736a.75.75 0 1 1-.75 1.299c-.6-.346-1.292-.535-2.08-.535m-5.88 4.488-.002.002zM17.893 9.6a.75.75 0 1 0-.255 1.479c1.75.301 2.612 1.476 2.612 2.79 0 1.6-1.27 2.873-2.951 2.873h-7.113a.75.75 0 1 0 0 1.5h7.113c2.481 0 4.45-1.916 4.45-4.373 0-2.098-1.441-3.852-3.856-4.269"
		clip-rule="evenodd"
	/>
</svg>
