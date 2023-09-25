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
		d="M10 5.25a.75.75 0 0 0-.746.825l.576 5.758a.75.75 0 0 0 1.492-.15L10.83 6.75h3.342l-.273 2.73a.75.75 0 1 0 1.493.15l.355-3.555A.75.75 0 0 0 15 5.25h-5ZM4.75 7a.75.75 0 0 0-1.5 0v.382c0 .663.374 1.269.967 1.565l.895.447a.25.25 0 0 1 .138.224V10a.75.75 0 0 0 1.5 0v-.382a1.75 1.75 0 0 0-.967-1.565l-.895-.447a.25.25 0 0 1-.138-.224V7Zm-1.812 4.504a.75.75 0 0 1 .562-.254h5a.75.75 0 0 1 .744.843l-.28 2.248a2.75 2.75 0 0 1-2.73 2.409h-.468a2.75 2.75 0 0 1-2.73-2.409l-.28-2.248a.75.75 0 0 1 .182-.59ZM4.35 12.75l.175 1.405a1.25 1.25 0 0 0 1.24 1.095h.47c.63 0 1.162-.47 1.24-1.095l.175-1.405h-3.3Zm11.15-1.5a4.751 4.751 0 0 0-4.695 4.026A.75.75 0 0 0 11 16.75h9a.75.75 0 0 0 .195-1.474A4.751 4.751 0 0 0 15.5 11.25Zm0 1.5a3.251 3.251 0 0 0-3.163 2.5h6.326a3.251 3.251 0 0 0-3.163-2.5ZM3 17.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5H3Z"
		clip-rule="evenodd"
	/>
</svg>
