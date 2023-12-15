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
		d="M12 3.75a8.24 8.24 0 0 0-6.746 3.5H8a.75.75 0 0 1 0 1.5H3.5A.75.75 0 0 1 2.75 8V3.5a.75.75 0 0 1 1.5 0v2.583A9.735 9.735 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12a.75.75 0 0 1-1.5 0A8.25 8.25 0 0 0 12 3.75Zm-9 7.5a.75.75 0 0 1 .75.75 8.25 8.25 0 0 0 14.996 4.75H16a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.583A9.735 9.735 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
