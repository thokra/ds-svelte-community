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
		d="M9 2.25a.75.75 0 0 0-.75.75v1.25H6a.75.75 0 0 0-.75.75v16c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75h-2.25V3a.75.75 0 0 0-.75-.75H9Zm6.75 3.5h1.5v14.5H6.75V5.75h1.5V6c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75v-.25Zm-6-.75v.25h4.5v-1.5h-4.5V5Zm4.018 5.672-.177.176a.75.75 0 0 1-1.06-1.06l.353-.354a1.25 1.25 0 0 1 1.768 0l1.414 1.414a1.25 1.25 0 0 1 0 1.768l-2.829 2.829a1.25 1.25 0 0 1-1.767 0l-.354-.354a.75.75 0 0 1 1.06-1.06l.178.176 2.474-2.475-1.06-1.06Zm-1.933 2.31-.19-.183-2.473 2.469 1.06 1.06.177-.176a.75.75 0 0 1 1.06 1.06l-.353.354a1.25 1.25 0 0 1-1.768 0l-1.414-1.414a1.25 1.25 0 0 1 0-1.768l2.823-2.82a1.25 1.25 0 0 1 1.747-.018l.368.351a.75.75 0 0 1-1.037 1.084Z"
		clip-rule="evenodd"
	/>
</svg>
