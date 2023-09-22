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
		d="M18.894 5.106a3.75 3.75 0 0 0-5.303 0L10.055 8.64a.25.25 0 0 0 0 .354l4.95 4.95a.25.25 0 0 0 .354 0l3.535-3.536a3.75 3.75 0 0 0 0-5.303Zm-4.95 10.253a.25.25 0 0 0 0-.354l-4.95-4.95a.25.25 0 0 0-.353 0l-3.535 3.536a3.75 3.75 0 1 0 5.303 5.303l3.535-3.535Z"
		clip-rule="evenodd"
	/>
</svg>
