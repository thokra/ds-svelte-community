<script lang="ts" context="module">
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
		d="M12.75 6.298a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Zm-5.953 10.12A1.417 1.417 0 0 0 7.8 14.681a.75.75 0 0 1 .53-.918l2.253-.604a.75.75 0 1 1 .388 1.45l-1.622.434a2.918 2.918 0 1 1-5.722-.797 2.917 2.917 0 1 1 4.557-3.55l1.622-.436a.75.75 0 1 1 .388 1.45l-2.252.603a.75.75 0 0 1-.919-.53 1.417 1.417 0 1 0-2.101 1.578.75.75 0 0 1 .269 1.004 1.417 1.417 0 0 0 1.608 2.052Zm11.916-5.636a1.417 1.417 0 0 0-1.735 1.001.75.75 0 0 1-.919.53l-2.252-.603a.75.75 0 1 1 .388-1.449l1.622.435a2.918 2.918 0 1 1 4.557 3.55 2.916 2.916 0 1 1-5.722.797l-1.622-.434a.75.75 0 0 1 .389-1.45l2.252.605a.75.75 0 0 1 .53.918 1.417 1.417 0 1 0 2.61-.316.75.75 0 0 1 .268-1.004 1.417 1.417 0 0 0-.366-2.58Zm-1.769-4.429a.75.75 0 0 1 0 1.06L15.53 8.829a.75.75 0 0 1-1.06-1.06l1.414-1.415a.75.75 0 0 1 1.06 0Zm-8.828 0a.75.75 0 0 0-1.06 1.06L8.47 8.829a.75.75 0 1 0 1.06-1.06L8.116 6.352Z"
		clip-rule="evenodd"
	/>
</svg>
