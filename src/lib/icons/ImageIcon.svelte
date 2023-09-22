<script lang="ts" context="module">
	import newUniqueId from "locally-unique-id-generator";
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
		d="M4 5.75a.25.25 0 0 0-.25.25v12c0 .138.112.25.25.25h5.599l3.777-5.666a.75.75 0 0 1 1.248 0l3.777 5.666H20a.25.25 0 0 0 .25-.25V6a.25.25 0 0 0-.25-.25H4Zm12.599 12.5L14 14.352l-2.599 3.898H16.6ZM2.25 6c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v12A1.75 1.75 0 0 1 20 19.75H4A1.75 1.75 0 0 1 2.25 18V6ZM8 8.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM5.25 10a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z"
		clip-rule="evenodd"
	/>
</svg>
