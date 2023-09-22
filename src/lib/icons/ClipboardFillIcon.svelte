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
		d="M12.53 2.47a.75.75 0 0 0-1.06 0l-2 2A.75.75 0 0 0 10 5.75h4a.75.75 0 0 0 .53-1.28l-2-2Zm3.55 3.39A2.25 2.25 0 0 1 14 7.25h-4a2.25 2.25 0 0 1-1.59-3.841.093.093 0 0 0-.067-.159H6a.75.75 0 0 0-.75.75v17c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75h-2.343c-.083 0-.125.1-.066.159a2.25 2.25 0 0 1 .488 2.452ZM9 10.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9ZM8.25 14a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 16.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"
		clip-rule="evenodd"
	/>
</svg>
