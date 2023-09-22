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
		d="M3.25 4A.75.75 0 0 1 4 3.25h14a.75.75 0 0 1 .53.22l2 2c.141.14.22.331.22.53v14a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V4Zm4.5 15.25h8.5v-7.5h-8.5v7.5Zm10 0V11a.75.75 0 0 0-.75-.75H7a.75.75 0 0 0-.75.75v8.25h-1.5V4.75h2.5V7c0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75V4.75h.94l1.56 1.56v12.94h-1.5Zm-2.5-13v-1.5h-6.5v1.5h6.5Zm-6 7.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
		clip-rule="evenodd"
	/>
</svg>
