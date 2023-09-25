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
		d="M12 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM6.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm11 8.5a.75.75 0 0 0-1.5 0v1.75H14.5a.75.75 0 0 0 0 1.5h1.75V21a.75.75 0 0 0 1.5 0v-1.75h1.75a.75.75 0 0 0 0-1.5h-1.75V16Zm-9.885 1.288a5.25 5.25 0 0 1 4.738-1.437.75.75 0 1 0 .293-1.471 6.756 6.756 0 0 0-6.092 1.847A6.75 6.75 0 0 0 4.827 21a.75.75 0 0 0 1.5 0 5.25 5.25 0 0 1 1.538-3.712Z"
		clip-rule="evenodd"
	/>
</svg>
