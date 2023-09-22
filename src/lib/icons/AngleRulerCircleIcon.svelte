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
		d="M8.269 6.992A9.75 9.75 0 0 1 21.75 16a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75 9.75 9.75 0 0 1 6.019-9.008ZM12 7.75a8.25 8.25 0 0 0-8.216 7.5H5.91V14a.75.75 0 0 1 1.5 0v1.25h2.06V14a.75.75 0 0 1 1.5 0v1.25h2.061V14a.75.75 0 0 1 1.5 0v1.25h2.06V14a.75.75 0 1 1 1.5 0v1.25h2.126A8.25 8.25 0 0 0 12 7.75Z"
		clip-rule="evenodd"
	/>
</svg>
