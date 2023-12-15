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
		d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm5.47-4.28a.75.75 0 0 1 1.06 0l3.792 3.791a.75.75 0 0 1 0 1.061L8.78 16.364a.75.75 0 1 1-1.06-1.061l3.261-3.261L7.72 8.78a.75.75 0 0 1 0-1.06Zm8.03.53a.75.75 0 0 0-1.5 0v7.583a.75.75 0 0 0 1.5 0V8.25Z"
		clip-rule="evenodd"
	/>
</svg>
