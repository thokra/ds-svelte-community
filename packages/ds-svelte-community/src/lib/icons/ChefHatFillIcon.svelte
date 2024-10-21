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
		d="M12 3.75c-1.346 0-2.5.629-3.294 1.589l-.514-.334a3.75 3.75 0 0 0-4.085 6.29l1.357.88.79 7.9A.75.75 0 0 0 7 20.75h10a.75.75 0 0 0 .746-.675l.792-7.915 1.332-.865a3.75 3.75 0 1 0-4.085-6.29l-.507.329C14.486 4.4 13.385 3.75 12 3.75Zm-3 7a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"
		clip-rule="evenodd"
	/>
</svg>
