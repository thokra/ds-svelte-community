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
		d="M12.425 4.382a.75.75 0 0 0-.85 0l-8 5.5a.75.75 0 0 0 0 1.236l8 5.5a.75.75 0 0 0 .85 0l8-5.5a.75.75 0 0 0 0-1.236l-8-5.5ZM12 15.09 5.324 10.5 12 5.91l6.676 4.59L12 15.09Zm-7.575-2.208a.75.75 0 0 0-.85 1.236l8 5.5a.75.75 0 0 0 .85 0l8-5.5a.75.75 0 0 0-.85-1.236L12 18.09l-7.575-5.208Z"
		clip-rule="evenodd"
	/>
</svg>
