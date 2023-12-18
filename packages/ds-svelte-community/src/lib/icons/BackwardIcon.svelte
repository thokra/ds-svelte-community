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
		d="M12.75 7a.75.75 0 0 0-1.114-.656l-9 5a.75.75 0 0 0 0 1.312l9 5A.75.75 0 0 0 12.75 17v-1.5a.75.75 0 0 0-1.5 0v.225L4.544 12l6.706-3.725V8.5a.75.75 0 0 0 1.5 0V7Zm7 0a.75.75 0 0 0-1.114-.656l-9 5a.75.75 0 0 0 0 1.312l9 5A.75.75 0 0 0 19.75 17V7Zm-1.5 8.725L11.544 12l6.706-3.725v7.45Z"
		clip-rule="evenodd"
	/>
</svg>
