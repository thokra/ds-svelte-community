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
		d="M12.65 5.563a.75.75 0 0 0-1.3 0l-7 12.124A.75.75 0 0 0 5 18.812h14a.75.75 0 0 0 .65-1.125l-7-12.124Zm1.424 5.467L12 7.438l-2.573 4.457.926.278L12.05 10.9a.75.75 0 0 1 .587-.137l1.437.267Z"
		clip-rule="evenodd"
	/>
</svg>
