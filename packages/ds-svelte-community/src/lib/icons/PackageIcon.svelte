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
		d="M11.625 2.35a.75.75 0 0 1 .75 0l7.794 4.5a.75.75 0 0 1 .375.65v9a.75.75 0 0 1-.375.65l-7.794 4.5a.75.75 0 0 1-.75 0l-7.794-4.5a.75.75 0 0 1-.375-.65v-9a.75.75 0 0 1 .375-.65l7.794-4.5ZM12 3.866 5.706 7.5 12 11.134 18.294 7.5 12 3.866Zm7.044 4.933-6.294 3.634v7.268l6.294-3.634V8.799ZM11.25 19.701v-7.268L4.956 8.799v7.268l6.294 3.634Z"
		clip-rule="evenodd"
	/>
</svg>
