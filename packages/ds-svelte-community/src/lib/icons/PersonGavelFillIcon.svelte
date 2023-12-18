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
		d="M6.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm.477 8.727a6.75 6.75 0 0 1 6.176-1.83c.187.04.248.27.113.405l-.107.107a2.25 2.25 0 0 0 0 3.182l.232.232a.25.25 0 0 1 0 .354l-1.232 1.232a2.243 2.243 0 0 0-.659 1.562c-.002.15-.117.279-.265.279H6a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 1.977-4.773Zm9.753 5.475a.028.028 0 1 0 .04.04.028.028 0 0 0-.04-.04ZM17 19.56l1.47 1.47a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0 0-1.061l-4-4a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 0 1.06l1.47 1.47-2.47 2.47a.75.75 0 1 0 1.06 1.06L17 19.56Z"
		clip-rule="evenodd"
	/>
</svg>
