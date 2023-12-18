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
		d="m14.833 5.418-.07-.405-.012-.06a2.223 2.223 0 0 0-.058-.257 4.651 4.651 0 0 0-.495-1.094C13.831 3.016 13.134 2.25 12 2.25H9c-1.085 0-1.9.711-2.377 1.256a6.073 6.073 0 0 0-.48.629.256.256 0 0 1-.211.115H4A1.75 1.75 0 0 0 2.25 6v1.94a3.31 3.31 0 0 0 3.31 3.31h1.828c.096 0 .168.088.15.183-.135.68-.31 1.63-.468 2.708-.313 2.134-.578 4.845-.314 6.952a.75.75 0 0 0 .744.657H19a.75.75 0 0 0 .576-1.23l-.002-.003-.017-.02c-.015-.02-.04-.05-.071-.092a9.43 9.43 0 0 1-.277-.38c-.236-.34-.565-.848-.926-1.51a20.146 20.146 0 0 1-2.048-5.662 355.309 355.309 0 0 1-.963-4.995.25.25 0 0 0-.367-.173l-.538.296c-1.124.639-2.566.952-3.685.62-.587-.174-1.132-.545-1.416-1.183-.276-.622-.242-1.36.023-2.155a.75.75 0 1 1 1.423.474c-.196.587-.146.912-.075 1.072.064.143.197.273.472.354.603.18 1.618.026 2.52-.488l.009-.005 1.133-.624a.25.25 0 0 0 .125-.263l-.063-.365Z"
		clip-rule="evenodd"
	/>
</svg>
