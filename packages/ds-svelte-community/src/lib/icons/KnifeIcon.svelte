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
		d="M13.939 3.392A.75.75 0 0 1 14.25 4v16a.75.75 0 0 1-1.5 0v-6.25h-.25A2.75 2.75 0 0 1 9.75 11V7.883a4.75 4.75 0 0 1 3.248-4.506l.265-.089a.75.75 0 0 1 .675.104M12.75 12.25V5.144a3.25 3.25 0 0 0-1.5 2.739V11c0 .69.56 1.25 1.25 1.25z"
		clip-rule="evenodd"
	/>
</svg>
