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
		d="m6.974 10.25-.463-5.5H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 0 1.5h-.51l-.464 5.5H18a.75.75 0 0 1 .75.75c0 1.56-1.216 2.949-2.81 3.796l.799 4.575a.75.75 0 0 1-.739.879H8a.75.75 0 0 1-.739-.88l.8-4.574C6.466 13.948 5.25 12.56 5.25 11a.75.75 0 0 1 .75-.75h.974Zm8.547 0 .463-5.5H8.016l.463 5.5h7.042Zm-6.325 3.43c-1.176-.511-1.932-1.243-2.26-1.93h10.127c-.327.687-1.083 1.419-2.26 1.93a.75.75 0 0 0-.439.816l.743 4.254H8.893l.744-4.253a.75.75 0 0 0-.44-.817Z"
		clip-rule="evenodd"
	/>
</svg>
