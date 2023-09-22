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
		d="M12.503 11.451a.753.753 0 0 1 .098-.33l3.94-6.87a2.486 2.486 0 0 1 3.41-.913 2.52 2.52 0 0 1 .919 3.429l-3.94 6.87a.746.746 0 0 1-.235.25l-3.265 2.17a.745.745 0 0 1-.788.024.755.755 0 0 1-.373-.698l.234-3.932Zm1.483.271-.134 2.25 1.868-1.242 2.594-4.522L16.58 7.2l-2.594 4.522Zm3.34-5.823 1.734 1.008.513-.894a1.01 1.01 0 0 0-.368-1.374.996.996 0 0 0-1.366.367l-.513.893ZM3.25 11A2.75 2.75 0 0 1 6 8.25h5.5a.75.75 0 0 1 0 1.5H9.75v9.5H18c.69 0 1.25-.56 1.25-1.25v-5.5a.75.75 0 0 1 1.5 0V18A2.75 2.75 0 0 1 18 20.75H6A2.75 2.75 0 0 1 3.25 18v-7ZM6 9.75h2.25v4h-3.5V11c0-.69.56-1.25 1.25-1.25Zm-1.25 5.5V18c0 .69.56 1.25 1.25 1.25h2.25v-4h-3.5Z"
		clip-rule="evenodd"
	/>
</svg>
