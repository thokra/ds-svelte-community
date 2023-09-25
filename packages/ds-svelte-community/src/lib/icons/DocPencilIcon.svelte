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
		d="M11.286 11.483a.75.75 0 0 1 .099-.33l4.5-7.795a2.75 2.75 0 0 1 4.763 2.75l-4.5 7.795a.75.75 0 0 1-.236.25l-3.732 2.465a.75.75 0 0 1-1.162-.671l.268-4.464Zm1.486.266-.167 2.79L14.937 13l3.028-5.243-2.165-1.25-3.028 5.243Zm6.577-6.39-.634 1.097-2.165-1.25.634-1.098a1.25 1.25 0 1 1 2.165 1.25ZM12.5 4.75H5.75v15.5h11.5V15.5a.75.75 0 0 1 1.5 0v5c0 .69-.56 1.25-1.25 1.25h-12c-.69 0-1.25-.56-1.25-1.25v-16c0-.69.56-1.25 1.25-1.25h7a.75.75 0 0 1 0 1.5Z"
		clip-rule="evenodd"
	/>
</svg>
