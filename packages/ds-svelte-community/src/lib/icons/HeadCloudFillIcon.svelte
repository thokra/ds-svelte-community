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
		d="M11.62 2.358c.24-.038.377.273.218.458a4.5 4.5 0 0 0-.66 1.016.27.27 0 0 1-.15.137 3.501 3.501 0 0 0 1.222 6.781h5.5c1.37 0 2.578-.688 3.3-1.738.129-.189.438-.158.488.065a8.78 8.78 0 0 1-1.731 7.422.25.25 0 0 0-.057.159V21.5a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75V21a.25.25 0 0 0-.25-.25H8A2.75 2.75 0 0 1 5.25 18v-1a.25.25 0 0 0-.25-.25H3.5a.75.75 0 0 1-.718-.966l1.459-4.863a.3.3 0 0 0 .01-.069 8.75 8.75 0 0 1 7.37-8.494m3.63.392a3 3 0 0 0-2.959 2.5h-.041a2 2 0 1 0 0 4h5.5a2.5 2.5 0 0 0 .1-4.998 3 3 0 0 0-2.6-1.502"
		clip-rule="evenodd"
	/>
</svg>
