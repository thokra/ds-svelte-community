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
		d="M15.53 6.53a.75.75 0 0 0-1.06-1.06l-5.188 5.178a.757.757 0 0 0-.13.13L4.47 15.452a.75.75 0 0 0 .53 1.28h14a.75.75 0 0 0 0-1.5h-6.58a7.453 7.453 0 0 0-1.64-3.96l4.75-4.741Zm-5.818 5.808-2.9 2.894h4.098a5.958 5.958 0 0 0-1.198-2.894Z"
		clip-rule="evenodd"
	/>
</svg>
