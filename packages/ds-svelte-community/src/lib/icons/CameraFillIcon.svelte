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
		d="M9 3.25a.75.75 0 0 0-.712.513L7.46 6.25H4A1.75 1.75 0 0 0 2.25 8v10c0 .966.784 1.75 1.75 1.75h16A1.75 1.75 0 0 0 21.75 18V8A1.75 1.75 0 0 0 20 6.25h-3.46l-.828-2.487A.75.75 0 0 0 15 3.25H9Zm.25 9.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM12 8.25a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5Z"
		clip-rule="evenodd"
	/>
</svg>
