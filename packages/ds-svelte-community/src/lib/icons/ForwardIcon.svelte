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
		d="M5.364 6.344A.75.75 0 0 0 4.25 7v10a.75.75 0 0 0 1.114.656l9-5a.75.75 0 0 0 0-1.312l-9-5Zm.386 9.381v-7.45L12.456 12 5.75 15.725Zm6.614-9.38A.75.75 0 0 0 11.25 7v1.5a.75.75 0 0 0 1.5 0v-.225L19.456 12l-6.706 3.725V15.5a.75.75 0 0 0-1.5 0V17a.75.75 0 0 0 1.114.656l9-5a.75.75 0 0 0 0-1.312l-9-5Z"
		clip-rule="evenodd"
	/>
</svg>
