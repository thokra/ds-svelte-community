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
		d="M9.25 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Zm4.25 3.25a.75.75 0 0 0-.75.75v12a.75.75 0 0 0 1.5 0v-4.25H15a.75.75 0 0 0 .742-.644l.837-5.859a1.75 1.75 0 0 0-1.732-1.997H13.5ZM8.557 9.411a1.75 1.75 0 0 1 1.648-1.161h.295a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0v-4.25H7a.75.75 0 0 1-.706-1.002L8.557 9.41Z"
		clip-rule="evenodd"
	/>
</svg>
