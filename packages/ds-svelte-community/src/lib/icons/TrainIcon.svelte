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
		d="M2.25 6A.75.75 0 0 1 3 5.25h10.8a7.952 7.952 0 0 1 7.95 7.95 2.55 2.55 0 0 1-2.55 2.55H3a.75.75 0 0 1-.75-.75V6Zm1.5.75h8.5V12c0 .414.336.75.75.75h7.235c.01.149.015.299.015.45 0 .58-.47 1.05-1.05 1.05H3.75v-7.5Zm10 4.5h6.2a6.453 6.453 0 0 0-6.15-4.5h-.05v4.5ZM3 17.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5H3Z"
		clip-rule="evenodd"
	/>
</svg>
