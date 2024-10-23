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
		d="M11.625 2.35a.75.75 0 0 1 .75 0l7.794 4.5a.75.75 0 0 1 .375.65v9a.75.75 0 0 1-.375.65l-7.779 4.49a.75.75 0 0 1-.39.11h-.006a.76.76 0 0 1-.373-.103L3.83 17.15a.75.75 0 0 1-.375-.65V7.494a.75.75 0 0 1 .382-.648zm-.375 17.351-6.294-3.634V8.799l3.486 2.013a3.75 3.75 0 0 0 2.808 4.863zM15.75 12a3.75 3.75 0 0 1-3 3.675v4.026l6.294-3.634V8.799l-3.486 2.013c.124.373.192.773.192 1.188m-1.79-1.105a2.25 2.25 0 1 1-3.919-.003l.01-.017.01-.016a2.249 2.249 0 0 1 3.9.036m.847-1.382L18.294 7.5 12 3.866 5.706 7.5l3.487 2.013A3.74 3.74 0 0 1 12 8.25a3.74 3.74 0 0 1 2.807 1.263"
		clip-rule="evenodd"
	/>
</svg>
