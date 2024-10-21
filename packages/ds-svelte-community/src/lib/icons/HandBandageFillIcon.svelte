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
		d="M10.75 3.792a.542.542 0 0 1 1.082-.036l.38 5.69-1.462-.069V3.792Zm-1.616 5.51-.62-4.03a.583.583 0 0 0-1.156.154c.044.399.089 2.168.123 3.8l1.653.077Zm-3.14.637c-.035-1.844-.086-3.98-.127-4.348A2.083 2.083 0 0 1 9.25 3.743a2.042 2.042 0 0 1 4.067-.203 2.059 2.059 0 0 1 3.432 1.533v.242a2.066 2.066 0 0 1 2.908 2.098l-.332 3.156a.57.57 0 0 1-.002.018l-.341 3.242-12.065-2.104-.894-.155.014.81-.1.417-.018-.022a1.645 1.645 0 0 0-2.285-.223.048.048 0 0 0-.005.07l1.86 2.03.382-1.586.788.136h.002l12.163 2.122-.08.755a.747.747 0 0 1-.049.2l-.35.875a.868.868 0 0 0-.035.003L6.86 18.368l-1.525-1.664-.277-.305v.002l-2.535-2.765a1.548 1.548 0 0 1 .174-2.255 3.146 3.146 0 0 1 3.316-.385 684.428 684.428 0 0 0-.02-1.057Zm11.914-.23.258-2.453a.566.566 0 1 0-1.126-.115l-.252 2.516 1.12.052Zm-2.658-.123V5.073a.559.559 0 0 0-1.115-.043l-.345 4.488 1.46.068Zm-8 10.25 10.5-1.111V21a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75v-1.164Z"
		clip-rule="evenodd"
	/>
</svg>
