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
		d="M8.506 4.907a.75.75 0 0 1 .744-.657h5.5a.75.75 0 0 1 .744.657l.25 2A.75.75 0 0 1 15 7.75H9a.75.75 0 0 1-.744-.843l.25-2Zm1.406.843-.062.5h4.3l-.062-.5H9.912Z"
		clip-rule="evenodd"
	/><path
		fill="currentColor"
		fill-rule="evenodd"
		d="M8.665 2.25a2.75 2.75 0 0 0-2.704 2.252l-1.62 8.794A2.755 2.755 0 0 0 5.113 16 2.75 2.75 0 0 0 7 20.75h12a.75.75 0 0 0 .67-1.085l-.105-.212a3.25 3.25 0 0 1 0-2.906l.104-.209.002-.003a.754.754 0 0 0 0-.67l-.002-.003-.104-.209a3.25 3.25 0 0 1 0-2.906l.106-.212a.749.749 0 0 0 .061-.498L17.82 3.23a1.25 1.25 0 0 0-1.22-.979H8.665Zm7.733 1.5H8.665c-.603 0-1.12.43-1.23 1.024L6.224 11.36c.246-.072.507-.111.777-.111h11.065l-1.667-7.5Zm1.492 11.5a4.75 4.75 0 0 1 0-2.5H7a1.25 1.25 0 1 0 0 2.5h10.89Zm0 4a4.75 4.75 0 0 1 0-2.5H7a1.25 1.25 0 1 0 0 2.5h10.89Z"
		clip-rule="evenodd"
	/>
</svg>
