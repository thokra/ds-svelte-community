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
		d="M10.98 2.303c.146-.015.27.1.27.245V12c0 .199.079.39.22.53l6.683 6.684a.245.245 0 0 1-.017.363A9.71 9.71 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12c0-5.04 3.825-9.188 8.73-9.697Zm2.04 0a.245.245 0 0 0-.27.245v9.038c0 .066.026.13.073.177l6.39 6.39a.245.245 0 0 0 .364-.017A9.71 9.71 0 0 0 21.75 12c0-5.04-3.825-9.188-8.73-9.697Z"
		clip-rule="evenodd"
	/>
</svg>
