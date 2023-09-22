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
		d="M6.5 3.25c-.69 0-1.25.56-1.25 1.25v6.75H4a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5h-1.25V8a.75.75 0 0 0-.22-.53l-4-4a.75.75 0 0 0-.53-.22H6.5Zm10.75 8H6.75v-6.5h6.5V7.5c0 .69.56 1.25 1.25 1.25h2.75v2.5Zm-1.06-4-1.44-1.44v1.44h1.44ZM6.75 15a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0v-5ZM9 14.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Zm3.75.75a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0v-5Zm2.25-.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75ZM18.75 20v-5a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0Z"
		clip-rule="evenodd"
	/>
</svg>
