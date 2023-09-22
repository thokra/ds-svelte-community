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
		d="M20.438 7.116a.745.745 0 0 0-.28-.272l-7.77-4.486a.746.746 0 0 0-.698-.041.746.746 0 0 0-.078.04l-7.77 4.487a.747.747 0 0 0-.386.669V16.5a.75.75 0 0 0 .375.65l7.781 4.492a.725.725 0 0 0 .141.067.745.745 0 0 0 .637-.068l7.779-4.491a.75.75 0 0 0 .375-.65V7.513a.745.745 0 0 0-.106-.397Zm-2.144.384L12 3.866 5.706 7.5 12 11.134 18.294 7.5ZM4.956 8.799v7.268l6.294 3.634v-7.268L4.956 8.8Zm7.794 3.634 6.294-3.634v7.268l-6.294 3.634v-7.268Z"
		clip-rule="evenodd"
	/>
</svg>
