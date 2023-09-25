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
		d="M14.74 4.877a.778.778 0 0 0-.012-.059l-.001-.002v-.003l-.003-.009-.007-.025a4.5 4.5 0 0 0-.117-.355 4.651 4.651 0 0 0-.402-.821C13.831 3.014 13.133 2.25 12 2.25H9c-1.085 0-1.9.711-2.377 1.256a6.073 6.073 0 0 0-.48.629.256.256 0 0 1-.211.115H4A1.75 1.75 0 0 0 2.25 6v1.94a3.31 3.31 0 0 0 3.31 3.31h1.828c.096 0 .168.088.15.183-.135.68-.31 1.63-.468 2.708-.242 1.652-.456 3.648-.417 5.444a.243.243 0 0 0 .417.163l8.697-8.697a.25.25 0 0 0 .069-.225 323.474 323.474 0 0 1-1.003-5.408l-.07-.405-.018-.103-.005-.033Zm2.548 11.518a.254.254 0 0 0-.414-.087l-5.015 5.015a.25.25 0 0 0 .177.427H19a.75.75 0 0 0 .576-1.23l-.002-.003-.017-.02c-.015-.02-.04-.05-.071-.092a9.43 9.43 0 0 1-.277-.38c-.236-.34-.565-.848-.926-1.51-.321-.59-.668-1.3-.995-2.12Zm2.193-8.853a1.371 1.371 0 0 0-1.951-.012l-.334.334a.25.25 0 0 1-.422-.13l-.186-1.011-.032-.18a.238.238 0 0 1 .077-.224 2.872 2.872 0 0 1 3.898 4.211L9.383 21.677a.25.25 0 0 1-.177.073H7.5a.123.123 0 0 1-.1-.2.759.759 0 0 1 .07-.08l12-12a1.371 1.371 0 0 0 .011-1.928Z"
		clip-rule="evenodd"
	/>
</svg>
