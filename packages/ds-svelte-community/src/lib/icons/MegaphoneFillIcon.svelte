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
		d="M18.25 6a.75.75 0 0 0-1.28-.53l-.615.614a7.3 7.3 0 0 1-3.891 2.017.256.256 0 0 0-.214.25v7.297c0 .124.091.23.214.25a7.26 7.26 0 0 1 3.891 2.018l.615.614a.75.75 0 0 0 1.28-.53V6Zm-12.5 6a3.75 3.75 0 0 0 3.75 3.75h1a.25.25 0 0 0 .25-.25v-7a.25.25 0 0 0-.25-.25h-1A3.75 3.75 0 0 0 5.75 12Zm3 4.984c0-.154.137-.27.29-.256.152.015.305.022.46.022h1.567c.206 0 .41.015.614.044l.432.061a.16.16 0 0 1 .137.16V19a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1-.75-.75v-2.016Z"
		clip-rule="evenodd"
	/>
</svg>
