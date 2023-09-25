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
		d="M6.75 4.75v14.5h10.5V8.75H14.5c-.69 0-1.25-.56-1.25-1.25V4.75h-6.5Zm8 1.06 1.44 1.44h-1.44V5.81ZM5.25 4.5c0-.69.56-1.25 1.25-1.25H14a.75.75 0 0 1 .53.22l4 4c.141.14.22.331.22.53v11.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15Zm4.5 9.5a2.25 2.25 0 0 1 4.5 0 .75.75 0 0 0 1.5 0A3.751 3.751 0 1 0 12 17.75a.75.75 0 0 0 0-1.5A2.248 2.248 0 0 1 9.75 14Z"
		clip-rule="evenodd"
	/>
</svg>
