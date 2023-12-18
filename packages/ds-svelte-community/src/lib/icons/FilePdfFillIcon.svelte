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
		d="M13.25 3.5a.25.25 0 0 0-.25-.25H6.5c-.69 0-1.25.56-1.25 1.25v6c0 .138.112.25.25.25h13a.25.25 0 0 0 .25-.25V9a.25.25 0 0 0-.25-.25h-4c-.69 0-1.25-.56-1.25-1.25v-4ZM15 7.25a.25.25 0 0 1-.25-.25V4.293a.25.25 0 0 1 .427-.177l2.707 2.707a.25.25 0 0 1-.177.427H15Zm-12 5a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75v-7a.75.75 0 0 0-.75-.75H3Zm4.7 1.64c.36 0 .672.068.938.203.27.135.478.324.623.567.15.243.224.527.224.854 0 .322-.075.607-.224.854-.15.243-.357.432-.623.567a2.044 2.044 0 0 1-.938.203h-.693V19h-1.05v-5.11H7.7Zm4.302 0c.355 0 .663.068.924.203.266.135.472.327.616.574.15.243.224.53.224.86v1.828c0 .327-.074.614-.224.86-.144.248-.35.442-.616.582a1.986 1.986 0 0 1-.924.203h-1.659v-5.11h1.66Zm2.798 0V19h1.05v-2.016h2.058v-.98h-2.072V14.87h2.254v-.98H14.8Zm-6.568 1.134c-.13-.126-.308-.19-.532-.19h-.693v1.359H7.7c.224 0 .401-.06.532-.182a.647.647 0 0 0 .203-.497.625.625 0 0 0-.203-.49Zm4.288.028a.731.731 0 0 0-.518-.182h-.609v3.15h.61c.214 0 .387-.06.517-.182a.628.628 0 0 0 .196-.483v-1.827a.62.62 0 0 0-.196-.476Z"
		clip-rule="evenodd"
	/>
</svg>
