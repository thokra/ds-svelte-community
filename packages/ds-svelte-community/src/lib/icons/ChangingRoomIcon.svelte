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
		d="M9.5 4.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM5.28 8.288A.75.75 0 0 1 6 7.75h.755a3.75 3.75 0 0 1 3.317 2H12.5a.75.75 0 0 1 0 1.5h-1.91l1.63 5.538a.75.75 0 0 1-.72.962H9.75v2.75a.75.75 0 0 1-1.5 0V17a.75.75 0 0 1 .75-.75h1.498l-1.584-5.385A2.25 2.25 0 0 0 6.755 9.25h-.194l-2.059 7H6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-2.75H3.5a.75.75 0 0 1-.72-.962l2.5-8.5ZM13.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm4.5-4a.75.75 0 0 0-1.5 0v1.25h-.71l-.329-.987a.75.75 0 0 0-.711-.513h-1a.75.75 0 0 0 0 1.5h.46l.329.987a.75.75 0 0 0 .711.513h2a.75.75 0 0 0 .75-.75v-2Zm.5 1.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
		clip-rule="evenodd"
	/>
</svg>
