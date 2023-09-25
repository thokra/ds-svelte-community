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
		d="M5.254 7.25A8.25 8.25 0 0 1 20.25 12a.75.75 0 0 0 1.5 0A9.75 9.75 0 0 0 12 2.25a9.735 9.735 0 0 0-7.75 3.833V3.5a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75H8a.75.75 0 0 0 0-1.5H5.254Zm10.746 8a.75.75 0 0 0 0 1.5h2.746A8.25 8.25 0 0 1 3.75 12a.75.75 0 0 0-1.5 0 9.75 9.75 0 0 0 17.5 5.917V20.5a.75.75 0 0 0 1.5 0V16a.75.75 0 0 0-.75-.75H16Z"
		clip-rule="evenodd"
	/>
</svg>
