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
		d="M4.25 3A.75.75 0 0 1 5 2.25h12A2.75 2.75 0 0 1 19.75 5v14A2.75 2.75 0 0 1 17 21.75H5a.75.75 0 0 1-.75-.75zM9.5 6.75a.75.75 0 0 0-.75.75V11c0 .592.247 1.092.546 1.48a4.6 4.6 0 0 0 1.024.947 7.7 7.7 0 0 0 1.269.713.95.95 0 0 0 .822 0 7.7 7.7 0 0 0 1.269-.713c.348-.243.726-.56 1.024-.946.298-.389.546-.89.546-1.481V7.5a.75.75 0 0 0-.75-.75zm.75 4.25c0 .158.065.345.235.566.171.223.418.438.695.632.274.192.552.345.765.451l.055.028.055-.027c.213-.107.491-.26.765-.452.277-.194.524-.41.695-.632.17-.22.235-.408.235-.566V8.25h-3.5zm-.75 5.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
