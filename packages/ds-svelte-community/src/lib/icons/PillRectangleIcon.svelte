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
		d="M18.894 5.106a3.75 3.75 0 0 0-5.303 0L5.106 13.59a3.75 3.75 0 1 0 5.303 5.303l8.485-8.485a3.75 3.75 0 0 0 0-5.303Zm-4.242 1.06a2.25 2.25 0 1 1 3.182 3.182L14.12 13.06l-3.18-3.18 3.712-3.713ZM9.879 10.94l-3.713 3.713a2.25 2.25 0 1 0 3.182 3.182l3.713-3.713-3.182-3.182Z"
		clip-rule="evenodd"
	/>
</svg>
