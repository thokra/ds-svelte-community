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
		d="M9 3.25a.75.75 0 0 0-.712.513L7.46 6.25H4A1.75 1.75 0 0 0 2.25 8v10c0 .966.784 1.75 1.75 1.75h16A1.75 1.75 0 0 0 21.75 18V8A1.75 1.75 0 0 0 20 6.25h-3.46l-.828-2.487A.75.75 0 0 0 15 3.25zm-.288 3.987L9.54 4.75h4.918l.83 2.487A.75.75 0 0 0 16 7.75h4a.25.25 0 0 1 .25.25v10a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25V8A.25.25 0 0 1 4 7.75h4a.75.75 0 0 0 .712-.513M9.25 12.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M12 8.25a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5"
		clip-rule="evenodd"
	/>
</svg>
