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
		d="M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1-.53 1.28h-11a.75.75 0 0 1-.53-1.28l5.5-5.5Zm-3.16 5.28h7.38L12 9.56l-3.69 3.69Z"
		clip-rule="evenodd"
	/>
</svg>
