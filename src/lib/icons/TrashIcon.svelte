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
		d="M8.75 6c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v.25h-6.5V6Zm-1.5.25V6A2.75 2.75 0 0 1 10 3.25h4A2.75 2.75 0 0 1 16.75 6v.25h2.75a.75.75 0 0 1 0 1.5h-.805l-.876 11.384a1.75 1.75 0 0 1-1.745 1.616H7.926a1.75 1.75 0 0 1-1.745-1.616L5.305 7.75H4.5a.75.75 0 0 1 0-1.5h2.75Zm-.44 1.5h10.38l-.867 11.27a.25.25 0 0 1-.249.23H7.926a.25.25 0 0 1-.25-.23L6.81 7.75Zm3.19 2a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Zm4.75.75a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Z"
		clip-rule="evenodd"
	/>
</svg>
