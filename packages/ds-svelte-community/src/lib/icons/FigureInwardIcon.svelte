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
		d="M10.75 5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-3.094 7.785a.25.25 0 0 1 .247-.285h5.694a.25.25 0 0 1 .248.285l-.745 5.215h-.85a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-4.25H15a.75.75 0 0 0 .742-.644l.837-5.859a1.75 1.75 0 0 0-1.732-1.997H9.153a1.75 1.75 0 0 0-1.732 1.998l.837 5.858A.75.75 0 0 0 9 16.75h.75V21a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75h-.85z"
		clip-rule="evenodd"
	/>
</svg>
