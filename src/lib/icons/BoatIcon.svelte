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
		d="M6 2.25a.75.75 0 0 0-.75.75v8.068l-.973.302a.75.75 0 0 0-.475.99l3.5 8.914A.75.75 0 0 0 8 21.75h8a.75.75 0 0 0 .698-.476l3.5-8.914a.75.75 0 0 0-.475-.99l-.973-.302V3a.75.75 0 0 0-.75-.75H6Zm11.25 8.351V3.75H6.75v6.851l5.027-1.563a.75.75 0 0 1 .446 0l5.027 1.563ZM8.511 20.25l-3.018-7.687L12 10.54l6.507 2.023-3.018 7.687H8.51ZM12.75 6.5a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 5.75a.75.75 0 1 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Z"
		clip-rule="evenodd"
	/>
</svg>
