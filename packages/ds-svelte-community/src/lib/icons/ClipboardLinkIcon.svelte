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
		d="M8.25 3A.75.75 0 0 1 9 2.25h6a.75.75 0 0 1 .75.75v1.25H18a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V5A.75.75 0 0 1 6 4.25h2.25V3Zm7.5 3a.75.75 0 0 1-.75.75H9A.75.75 0 0 1 8.25 6v-.25h-1.5v14.5h10.5V5.75h-1.5V6Zm-1.5-.75h-4.5v-1.5h4.5v1.5Zm-.482 5.422-.177.176a.75.75 0 0 1-1.06-1.06l.353-.354a1.25 1.25 0 0 1 1.768 0l1.414 1.414a1.25 1.25 0 0 1 0 1.768l-2.829 2.829a1.25 1.25 0 0 1-1.767 0l-.354-.354a.75.75 0 0 1 1.06-1.06l.178.176 2.474-2.475-1.06-1.06Zm-2.124 2.127.191.182a.75.75 0 1 0 1.037-1.084l-.368-.351a1.25 1.25 0 0 0-1.747.019l-2.822 2.819a1.25 1.25 0 0 0 0 1.768l1.413 1.414a1.25 1.25 0 0 0 1.768 0l.354-.354a.75.75 0 0 0-1.061-1.06l-.177.176-1.06-1.06 2.472-2.47Z"
		clip-rule="evenodd"
	/>
</svg>
