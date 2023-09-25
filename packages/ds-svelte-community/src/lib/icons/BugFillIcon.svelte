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
		d="M5.53 4.207a.75.75 0 0 0-1.06 1.06l1.516 1.517a7.375 7.375 0 0 0-.688 1.117.242.242 0 0 0 .22.349h13.05a.24.24 0 0 0 .22-.347 6.129 6.129 0 0 0-.744-1.149l1.486-1.486a.75.75 0 0 0-1.06-1.06l-1.54 1.54C15.545 4.79 13.654 4.25 12 4.25c-1.784 0-3.557.353-4.965 1.462L5.53 4.207Zm5.453 15.495a.245.245 0 0 0 .267-.246V10a.25.25 0 0 0-.25-.25H4.782a.246.246 0 0 0-.239.184c-.116.45-.2.896-.248 1.316H3a.75.75 0 0 0 0 1.5h1.281c.135 1.616.703 3.246 1.69 4.48l-1.501 1.5a.75.75 0 1 0 1.06 1.061l1.516-1.515c1.13.857 2.524 1.29 3.937 1.425Zm8.52-9.762a.246.246 0 0 0-.24-.19H13a.25.25 0 0 0-.25.25v9.46c0 .145.122.26.265.247 1.426-.125 2.81-.536 3.947-1.422l1.508 1.507a.75.75 0 1 0 1.06-1.06l-1.51-1.51c.957-1.228 1.552-2.873 1.696-4.472H21a.75.75 0 0 0 0-1.5h-1.286c-.039-.417-.108-.86-.211-1.31Z"
		clip-rule="evenodd"
	/>
</svg>
