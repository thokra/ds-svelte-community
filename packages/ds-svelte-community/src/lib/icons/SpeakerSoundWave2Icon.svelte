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
		d="M12.325 4.324A.75.75 0 0 1 12.75 5v14a.75.75 0 0 1-1.219.586L6.738 15.75H3a.75.75 0 0 1-.75-.75V9A.75.75 0 0 1 3 8.25h3.737l4.794-3.836a.75.75 0 0 1 .794-.09ZM11.25 6.56 7.469 9.586A.75.75 0 0 1 7 9.75H3.75v4.5H7a.75.75 0 0 1 .469.164l3.781 3.025V6.56Zm4.46.665a.75.75 0 0 1 1.06 0A6.731 6.731 0 0 1 18.75 12a6.731 6.731 0 0 1-1.98 4.775.75.75 0 1 1-1.06-1.061A5.231 5.231 0 0 0 17.25 12c0-1.45-.587-2.763-1.54-3.714a.75.75 0 0 1 0-1.06Zm-.836 1.832a.75.75 0 1 0-1.06 1.061 2.65 2.65 0 0 1 .78 1.882c0 .735-.298 1.4-.78 1.882a.75.75 0 1 0 1.06 1.061A4.15 4.15 0 0 0 16.094 12a4.15 4.15 0 0 0-1.22-2.943Z"
		clip-rule="evenodd"
	/>
</svg>
