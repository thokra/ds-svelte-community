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
		d="M9.75 3.75v12.5h8.5v-7.5H14.5c-.69 0-1.25-.56-1.25-1.25V3.75h-3.5Zm5 1.06v2.44h2.44l-2.44-2.44ZM8.25 3.5c0-.69.56-1.25 1.25-1.25H14a.75.75 0 0 1 .53.22l5 5c.141.14.22.331.22.53v8.5c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25v-13Zm-2.5 4.25h.752a.75.75 0 1 0 0-1.5H5.5c-.69 0-1.25.56-1.25 1.25v13c0 .69.56 1.25 1.25 1.25h9c.69 0 1.25-.56 1.25-1.25v-.998a.75.75 0 0 0-1.5 0v.748h-8.5V7.75Z"
		clip-rule="evenodd"
	/>
</svg>
