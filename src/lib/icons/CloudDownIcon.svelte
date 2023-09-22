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
		d="M11 2.25A5.75 5.75 0 0 0 5.25 8c0 .052-.017.1-.074.157a.656.656 0 0 1-.325.158A3.25 3.25 0 0 0 5.5 14.75H9a.75.75 0 0 0 0-1.5H5.5a1.75 1.75 0 0 1-.35-3.465c.745-.151 1.6-.747 1.6-1.785a4.25 4.25 0 0 1 8.076-1.854c.288.593.896 1.104 1.68 1.104h.744a3 3 0 1 1 0 6H15a.75.75 0 0 0 0 1.5h2.25a4.5 4.5 0 1 0 0-9h-.745c-.09 0-.236-.066-.33-.26A5.746 5.746 0 0 0 11 2.25Zm1 8a.75.75 0 0 1 .75.75v7.69l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.748.748 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V11a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
