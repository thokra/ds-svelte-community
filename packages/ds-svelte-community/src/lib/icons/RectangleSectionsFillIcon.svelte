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
		d="M11.25 2.75a.5.5 0 0 0-.5-.5H3.002a.75.75 0 0 0-.75.75v10.75a.5.5 0 0 0 .5.5h7.998a.5.5 0 0 0 .5-.5zm-8.498 13a.5.5 0 0 0-.5.5V21c0 .414.336.75.75.75h7.748a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm9.998 5.5a.5.5 0 0 0 .5.5h7.748a.75.75 0 0 0 .75-.75V10.25a.5.5 0 0 0-.5-.5H13.25a.5.5 0 0 0-.5.5zm8.498-13a.5.5 0 0 0 .5-.5V3a.75.75 0 0 0-.75-.75H13.25a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5z"
		clip-rule="evenodd"
	/>
</svg>
