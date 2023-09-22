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
		d="M11.25 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0V6Zm-3 2a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0V8Zm-3 2.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3Zm8.25-.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm6.75.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3ZM16.5 7.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
