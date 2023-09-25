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
		d="M3.75 5a1.25 1.25 0 1 1 2.5 0v2a.75.75 0 0 0 1.5 0V5a2.75 2.75 0 0 0-5.5 0v12c0 .966.784 1.75 1.75 1.75h5.5A1.75 1.75 0 0 0 11.25 17v-4.25h1.5V17c0 .966.784 1.75 1.75 1.75H20A1.75 1.75 0 0 0 21.75 17V5a2.75 2.75 0 1 0-5.5 0v2a.75.75 0 0 0 1.5 0V5a1.25 1.25 0 1 1 2.5 0v6.25H3.75V5Zm6 7.75h-6V17c0 .138.112.25.25.25h5.5a.25.25 0 0 0 .25-.25v-4.25Zm4.5 0V17c0 .138.112.25.25.25H20a.25.25 0 0 0 .25-.25v-4.25h-6Z"
		clip-rule="evenodd"
	/>
</svg>
