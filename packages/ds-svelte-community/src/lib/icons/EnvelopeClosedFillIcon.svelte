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
		d="M2.592 7.63a.224.224 0 0 0-.342.19v9.661a.5.5 0 0 0 .854.354l5.487-5.487a.5.5 0 0 0-.077-.77L2.592 7.63Zm1.571 11.266a.5.5 0 0 0 .354.854H19.48a.5.5 0 0 0 .354-.854l-5.842-5.841a.5.5 0 0 0-.63-.062l-.948.631a.75.75 0 0 1-.832 0l-.947-.632a.5.5 0 0 0-.631.063l-5.842 5.841Zm16.733-1.06a.5.5 0 0 0 .854-.353V7.821a.225.225 0 0 0-.344-.19l-5.922 3.947a.5.5 0 0 0-.076.77l5.488 5.489Zm.414-11.915c.213-.133.3-.425.087-.558A.747.747 0 0 0 21 5.25H3a.747.747 0 0 0-.398.114c-.213.134-.126.425.087.558l.708.442a.8.8 0 0 1 .018.012l8.307 5.538a.5.5 0 0 0 .554 0l8.307-5.538a.827.827 0 0 1 .019-.012l.708-.443Z"
		clip-rule="evenodd"
	/>
</svg>
