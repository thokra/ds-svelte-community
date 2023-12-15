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
		d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6.74-7.683A8.28 8.28 0 0 0 4.65 8.25h3.719a41.38 41.38 0 0 1 .62-3.934Zm1.63-.452a41.145 41.145 0 0 0-.742 4.385h4.245a41.142 41.142 0 0 0-.743-4.385 8.305 8.305 0 0 0-2.76 0ZM8.24 14.25a34.49 34.49 0 0 1 0-4.5H4.06A8.256 8.256 0 0 0 3.75 12c0 .78.108 1.535.31 2.25h4.18Zm1.503 0a33.017 33.017 0 0 1 0-4.5h4.514c.103 1.51.103 2.997 0 4.5H9.744Zm-.754 5.433a41.32 41.32 0 0 1-.62-3.933h-3.72a8.28 8.28 0 0 0 4.34 3.933Zm1.631.452a41.096 41.096 0 0 1-.743-4.385h4.246a41.106 41.106 0 0 1-.743 4.385 8.315 8.315 0 0 1-2.76 0Zm5.141-5.885c.098-1.502.098-2.99 0-4.5h4.179c.202.715.31 1.47.31 2.25a8.26 8.26 0 0 1-.31 2.25h-4.18Zm-.75-9.933a8.28 8.28 0 0 1 4.34 3.933h-3.72a41.395 41.395 0 0 0-.62-3.933Zm0 15.366a41.26 41.26 0 0 0 .62-3.933h3.72a8.28 8.28 0 0 1-4.34 3.933Z"
		clip-rule="evenodd"
	/>
</svg>
