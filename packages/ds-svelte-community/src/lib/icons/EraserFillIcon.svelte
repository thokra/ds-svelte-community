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
		d="M15.005 3.338a.75.75 0 0 0-1.06 0L6.342 10.94a.5.5 0 0 0 0 .707l.176.175 5.655 5.656.184.18a.5.5 0 0 0 .704-.003l7.6-7.6a.75.75 0 0 0 0-1.06zm-3.71 16.085a.5.5 0 0 0-.004-.71l-.175-.172-5.835-5.833a.5.5 0 0 0-.707 0l-.53.53a1.75 1.75 0 0 0 0 2.474l4.243 4.243a1.75 1.75 0 0 0 2.475 0z"
		clip-rule="evenodd"
	/>
</svg>
