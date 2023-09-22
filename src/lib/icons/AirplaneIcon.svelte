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
		d="M6.388 3.625a.75.75 0 0 0-.412 1.145l2.392 3.489-.255.073-2.318-1.643a.75.75 0 0 0-.64-.11l-1.923.552a.75.75 0 0 0-.33 1.244l3.07 3.147a5.75 5.75 0 0 0 5.7 1.51l8.665-2.484c.99-.284 1.231-1.576.41-2.198l-1.595-1.207a4.75 4.75 0 0 0-4.176-.779l-1.547.444-4.44-3.596a.75.75 0 0 0-.678-.138l-1.923.551ZM8.18 9.873l1.082-.31.29.423a.75.75 0 0 0 1.238-.848L7.802 4.78l.547-.157 4.44 3.596a.75.75 0 0 0 .678.138l1.922-.551a3.25 3.25 0 0 1 2.858.533l1.196.905-8.184 2.347a4.25 4.25 0 0 1-4.213-1.117L4.853 8.226l.369-.105 2.317 1.643a.75.75 0 0 0 .641.11Zm1.63 7.566a3.48 3.48 0 0 0-.096-.104c.759-.67 2.107-1.585 3.786-1.585 3.086 0 4.75 2.164 4.75 4.25a.75.75 0 0 0 1.5 0c0-2.914-2.336-5.75-6.25-5.75-2.452 0-4.275 1.458-5.083 2.242A4.074 4.074 0 0 0 7 16.25c-1.204 0-2.161.459-2.81 1.19-.638.716-.94 1.65-.94 2.56a.75.75 0 0 0 1.5 0c0-.59.198-1.156.56-1.564.351-.395.894-.686 1.69-.686.796 0 1.339.291 1.69.686.362.408.56.974.56 1.564a.75.75 0 0 0 1.5 0c0-.91-.302-1.844-.94-2.56Z"
		clip-rule="evenodd"
	/>
</svg>
