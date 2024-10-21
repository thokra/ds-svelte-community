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
		d="M7.97 10.085A3.25 3.25 0 1 1 9.1 8.478l1.456.822 6.506-1.952a1.75 1.75 0 0 1 .79-.05l2.771.462a.75.75 0 0 1 .234 1.4L9.102 15.527a3.25 3.25 0 1 1-1.132-1.612c.483-.66.685-1.462.607-2.241l-.112-.58a3.226 3.226 0 0 0-.495-1.009ZM4.25 7.5a1.75 1.75 0 1 1 3.159 1.039l-.012.015-.006.008A1.75 1.75 0 0 1 4.25 7.5Zm3.141 7.938a1.75 1.75 0 1 0-2.782 2.123 1.75 1.75 0 0 0 2.782-2.123Zm5.088-.607a.25.25 0 0 0 .047.46l4.536 1.36c.256.077.527.095.79.05l2.771-.461a.75.75 0 0 0 .225-1.405l-4.144-2.167a.25.25 0 0 0-.235.002l-3.99 2.162Z"
		clip-rule="evenodd"
	/>
</svg>
