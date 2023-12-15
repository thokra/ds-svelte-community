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
		d="M18.03 7.03a.75.75 0 0 0-1.06-1.06L12 10.94 7.03 5.97a.75.75 0 0 0-1.06 1.06L10.94 12l-4.97 4.97a.75.75 0 1 0 1.06 1.06L12 13.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L13.06 12l4.97-4.97Z"
	/>
</svg>
