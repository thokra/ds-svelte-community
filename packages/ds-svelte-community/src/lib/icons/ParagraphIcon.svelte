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
		d="M11.997 2.25A3.747 3.747 0 0 0 8.75 7.864a3.292 3.292 0 0 0-.376 6.218l4.486 1.848a2.245 2.245 0 0 1-.857 4.32A2.252 2.252 0 0 1 9.75 18a.75.75 0 0 0-1.5 0 3.752 3.752 0 0 0 3.753 3.75 3.747 3.747 0 0 0 3.247-5.614 3.293 3.293 0 0 0 .376-6.218L11.14 8.07a2.245 2.245 0 0 1 .857-4.32A2.252 2.252 0 0 1 14.25 6a.75.75 0 0 0 1.5 0 3.752 3.752 0 0 0-3.753-3.75Zm1.2 12.196.057.018.511.184a1.793 1.793 0 0 0 1.29-3.344l-4.251-1.75a.753.753 0 0 1-.058-.018l-.51-.184a1.793 1.793 0 0 0-1.29 3.344l4.25 1.75Z"
		clip-rule="evenodd"
	/>
</svg>
