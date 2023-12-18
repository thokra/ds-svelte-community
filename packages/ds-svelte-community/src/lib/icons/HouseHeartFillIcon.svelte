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
		d="M12.53 2.47a.75.75 0 0 0-1.06 0l-7 7a.75.75 0 0 0-.22.53v11c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.22-.53l-7-7ZM12 11.94a2.164 2.164 0 0 0-3.03 3.09l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5A2.164 2.164 0 0 0 12 11.94Z"
		clip-rule="evenodd"
	/>
</svg>
