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
		d="M4 5.25A1.75 1.75 0 0 0 2.25 7v10c0 .966.784 1.75 1.75 1.75h11A1.75 1.75 0 0 0 16.75 17V7A1.75 1.75 0 0 0 15 5.25H4Zm14.424 10.713a.25.25 0 0 1-.174-.238v-7.45a.25.25 0 0 1 .174-.238l2.347-.751A.75.75 0 0 1 21.75 8v8a.75.75 0 0 1-.979.714l-2.347-.75Z"
		clip-rule="evenodd"
	/>
</svg>
