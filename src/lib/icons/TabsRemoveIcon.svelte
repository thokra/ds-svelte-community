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
		d="M6.25 4c0-.966.784-1.75 1.75-1.75h12c.966 0 1.75.784 1.75 1.75v12A1.75 1.75 0 0 1 20 17.75H8A1.75 1.75 0 0 1 6.25 16V4ZM8 3.75a.25.25 0 0 0-.25.25v12c0 .138.112.25.25.25h12a.25.25 0 0 0 .25-.25V4a.25.25 0 0 0-.25-.25H8ZM9.25 10a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75Zm-5.5-2A.25.25 0 0 1 4 7.75h.5a.75.75 0 0 0 0-1.5H4A1.75 1.75 0 0 0 2.25 8v12c0 .966.784 1.75 1.75 1.75h12A1.75 1.75 0 0 0 17.75 20v-.5a.75.75 0 0 0-1.5 0v.5a.25.25 0 0 1-.25.25H4a.25.25 0 0 1-.25-.25V8Z"
		clip-rule="evenodd"
	/>
</svg>
