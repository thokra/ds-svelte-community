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
		d="M4.436 6.39A.75.75 0 0 0 3.25 7v10a.75.75 0 0 0 1.186.61l7-5a.75.75 0 0 0 0-1.22l-7-5ZM9.71 12l-4.96 3.543V8.457L9.71 12Zm.947-5.667a.75.75 0 0 1 .779.057l7 5a.75.75 0 0 1 0 1.22l-7 5A.75.75 0 0 1 10.25 17v-2a.75.75 0 0 1 1.5 0v.543L16.71 12l-4.96-3.543V9a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .407-.667ZM20 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
