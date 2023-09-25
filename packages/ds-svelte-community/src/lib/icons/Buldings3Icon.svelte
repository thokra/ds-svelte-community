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
		d="M7 2.25a.75.75 0 0 0-.75.75v6.25H3a.75.75 0 0 0-.75.75v11c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75h-3.25V3a.75.75 0 0 0-.75-.75H7Zm10.75 8.5v9.5h2.5v-9.5h-2.5Zm-1.5 9.5V3.75h-8.5v16.5h8.5Zm-10 0v-9.5h-2.5v9.5h2.5ZM10 5.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm3.75.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2ZM10 11.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm3.75.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z"
		clip-rule="evenodd"
	/>
</svg>
