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
		d="M7.75 8a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0Zm0 3.873A5.735 5.735 0 0 0 12 13.75a5.735 5.735 0 0 0 4.25-1.877v.726l-4.65 3.1-3.85-2.14v-1.686Zm0 3.402V16c0 .703.17 1.366.473 1.95l1.974-1.316-2.447-1.36Zm1.389 3.867 7.111-4.74V16a4.25 4.25 0 0 1-7.111 3.142ZM12 2.25A5.75 5.75 0 0 0 6.25 8v8a5.75 5.75 0 0 0 11.5 0V8A5.75 5.75 0 0 0 12 2.25Zm-1.5 5a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5h-.01Zm2.25.75a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
