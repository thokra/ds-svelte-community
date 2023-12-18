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
		d="M20.53 4.53a.75.75 0 0 0-1.06-1.06l-16 16a.75.75 0 1 0 1.06 1.06l16-16ZM9.563 18.011a.25.25 0 0 1-.02-.372l2.78-2.78a.25.25 0 0 1 .427.177V19a.75.75 0 0 1-1.219.586L9.564 18.01Zm9.775-10.167a.255.255 0 0 0-.043.3c.61 1.15.955 2.463.955 3.856 0 2.28-.924 4.341-2.418 5.835a.75.75 0 0 0 1.06 1.061A9.722 9.722 0 0 0 21.75 12a9.708 9.708 0 0 0-1.288-4.847.244.244 0 0 0-.385-.048l-.739.739Zm-2.28 2.28a.258.258 0 0 0-.06.261c.163.509.252 1.052.252 1.615 0 1.45-.587 2.763-1.54 3.714a.75.75 0 1 0 1.06 1.061A6.731 6.731 0 0 0 18.75 12a6.73 6.73 0 0 0-.514-2.588.24.24 0 0 0-.394-.072l-.784.784Zm-2.502 2.502a.263.263 0 0 0-.066.114 2.658 2.658 0 0 1-.676 1.142.75.75 0 1 0 1.06 1.061 4.15 4.15 0 0 0 1.204-3.311c-.018-.199-.255-.273-.396-.132l-1.126 1.126Zm-1.88-4.485a.25.25 0 0 0 .074-.177V5a.75.75 0 0 0-1.219-.586L6.805 8.195a.25.25 0 0 1-.156.055H3a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h1.964a.25.25 0 0 0 .177-.073l7.536-7.536Z"
		clip-rule="evenodd"
	/>
</svg>
