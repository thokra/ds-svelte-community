<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
	import type { SVGAttributes } from "svelte/elements";
</script>

<script lang="ts">
	/**
	 * Title of the icon, used for accessibility
	 */
	export let title = "";

	type $$Props = SVGAttributes<SVGElement> & {
		title?: string;
	};

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
	{...$$restProps}
>
	{#if title}
		<title {id}>{title}</title>
	{/if}
	<slot />
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M12.75 5a.75.75 0 0 0-1.219-.586L6.738 8.25H3a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h3.737l4.794 3.836A.75.75 0 0 0 12.75 19V5Zm2.124 4.057a.75.75 0 1 0-1.06 1.061 2.65 2.65 0 0 1 .78 1.882c0 .735-.298 1.4-.78 1.882a.75.75 0 1 0 1.06 1.061A4.15 4.15 0 0 0 16.094 12a4.15 4.15 0 0 0-1.22-2.943Zm.836-1.832a.75.75 0 0 1 1.06 0A6.731 6.731 0 0 1 18.75 12a6.731 6.731 0 0 1-1.98 4.775.75.75 0 1 1-1.06-1.061A5.231 5.231 0 0 0 17.25 12c0-1.45-.587-2.763-1.54-3.714a.75.75 0 0 1 0-1.06Zm3.182-2.121a.75.75 0 0 0-1.06 1.06A8.222 8.222 0 0 1 20.25 12c0 2.28-.924 4.341-2.418 5.835a.75.75 0 0 0 1.06 1.061A9.722 9.722 0 0 0 21.75 12a9.722 9.722 0 0 0-2.858-6.896Z"
		clip-rule="evenodd"
	/>
</svg>
