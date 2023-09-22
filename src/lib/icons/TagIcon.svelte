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
		d="M5.598 17.74a.75.75 0 0 0 .662.662l5.091.566a.75.75 0 0 0 .613-.215l9.051-9.051a.75.75 0 0 0 0-1.061L15.36 2.984a.75.75 0 0 0-1.061 0l-9.051 9.051a.75.75 0 0 0-.215.613l.566 5.091Zm5.56-.303-4.136-.46-.46-4.136 8.266-8.266 4.596 4.596-8.265 8.266ZM10 12.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
		clip-rule="evenodd"
	/>
</svg>
