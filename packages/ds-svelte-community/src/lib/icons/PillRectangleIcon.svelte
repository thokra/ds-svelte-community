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
		d="M18.894 5.106a3.75 3.75 0 0 0-5.303 0L5.106 13.59a3.75 3.75 0 1 0 5.303 5.303l8.485-8.485a3.75 3.75 0 0 0 0-5.303m-4.242 1.06a2.25 2.25 0 1 1 3.182 3.182L14.12 13.06l-3.18-3.18zM9.879 10.94l-3.713 3.713a2.25 2.25 0 1 0 3.182 3.182l3.713-3.713z"
		clip-rule="evenodd"
	/>
</svg>
