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
		d="M18.03 8.97a.75.75 0 1 0-1.06 1.06l1.22 1.22H4a.75.75 0 0 0 0 1.5h14.189l-1.22 1.22a.75.75 0 1 0 1.061 1.06l2.5-2.5a.747.747 0 0 0 0-1.06l-2.5-2.5Z"
		clip-rule="evenodd"
	/>
</svg>
