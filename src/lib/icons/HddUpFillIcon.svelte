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
		d="M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-.75.75h-2.495a.267.267 0 0 1-.211-.109 2.266 2.266 0 0 0-.203-.232l-3.5-3.5a2.25 2.25 0 0 0-3.182 0l-3.5 3.5a2.266 2.266 0 0 0-.203.232.267.267 0 0 1-.21.109H4a.75.75 0 0 1-.75-.75V4ZM16.5 6.25a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5h-1.5Zm-.75 3.25a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm-4.28.97a.748.748 0 0 1 1.06 0l3.5 3.5a.75.75 0 1 1-1.06 1.06l-2.22-2.22v7.69a.75.75 0 0 1-1.5 0v-7.69l-2.22 2.22a.75.75 0 0 1-1.06-1.06l3.5-3.5Z"
		clip-rule="evenodd"
	/>
</svg>
