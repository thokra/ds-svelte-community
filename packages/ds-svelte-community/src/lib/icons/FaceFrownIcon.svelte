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
		d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6.5-3.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm.12 8.657a.75.75 0 1 0 1.26-.814C15.6 15 13.762 14.25 12 14.25s-3.6.749-4.63 2.343a.75.75 0 1 0 1.26.814c.692-1.072 1.993-1.657 3.37-1.657s2.678.585 3.37 1.657Z"
		clip-rule="evenodd"
	/>
</svg>
