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
		d="M20.75 4a.75.75 0 0 0-.987-.712l-.265.089a4.75 4.75 0 0 0-3.248 4.506V11A2.75 2.75 0 0 0 19 13.75h.25V20a.75.75 0 0 0 1.5 0V4Zm-1.5 1.144v7.106H19c-.69 0-1.25-.56-1.25-1.25V7.883a3.25 3.25 0 0 1 1.5-2.739ZM6.75 4a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0V4Zm-2 0a.75.75 0 0 0-1.5 0v5a2.75 2.75 0 0 0 2 2.646V20a.75.75 0 0 0 1.5 0v-8.353A2.751 2.751 0 0 0 8.75 9V4a.75.75 0 0 0-1.5 0v5a1.25 1.25 0 1 1-2.5 0V4Zm9.372 7.278a2.55 2.55 0 0 1-.872.388V20a.75.75 0 0 1-1.5 0v-8.334a2.531 2.531 0 0 1-.872-.388 2.632 2.632 0 0 1-.916-1.181c-.354-.866-.338-1.893-.204-2.707.13-1.002.37-1.97.757-2.712.38-.728 1.015-1.428 1.985-1.428.957 0 1.596.667 1.983 1.4.39.736.629 1.707.76 2.742.133.814.149 1.84-.205 2.705a2.632 2.632 0 0 1-.916 1.181Zm-2.278-5.906c-.272.522-.48 1.299-.6 2.224l-.002.014-.002.013c-.114.684-.096 1.4.11 1.906.099.24.23.41.39.521.155.11.39.2.76.2s.604-.09.76-.2c.16-.112.291-.281.39-.521.206-.506.224-1.222.11-1.906l-.002-.015-.002-.015c-.12-.96-.329-1.732-.598-2.242-.274-.518-.511-.601-.658-.601-.134 0-.374.083-.656.622Z"
		clip-rule="evenodd"
	/>
</svg>
