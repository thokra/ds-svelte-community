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
		d="M12.364 2.344a.75.75 0 0 0-.728 0l-9 5A.75.75 0 0 0 2.25 8v11c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-.386-.656l-9-5ZM3.75 17.19l5.088-5.088L3.75 9.275v7.914Zm6.644-5.939h3.212L19.456 8 12 3.858 4.544 8l5.85 3.25Zm4.768.851 5.088 5.088V9.275L15.162 12.1Zm4.027 6.149-5.5-5.5h-3.378l-5.5 5.5h14.378Z"
		clip-rule="evenodd"
	/>
</svg>
