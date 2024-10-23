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
		d="M6.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0m1.938 6.81a.75.75 0 0 1 .437.522l1.262 5.5a.75.75 0 0 1-.651.914l-4.656.5a.75.75 0 0 1-.83-.773l.018-.5.002-.026a7.75 7.75 0 0 1 3.738-6.09.75.75 0 0 1 .68-.047m7.304.047a.75.75 0 0 0-1.117.475l-1.262 5.5a.75.75 0 0 0 .651.914l4.656.5a.75.75 0 0 0 .83-.773l-.018-.5v-.017l-.002-.01a7.75 7.75 0 0 0-3.738-6.089M12 16.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75m.75-1.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"
		clip-rule="evenodd"
	/>
</svg>
