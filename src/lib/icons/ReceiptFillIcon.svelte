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
		d="M6.53 3.47A.75.75 0 0 0 5.25 4v16c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-1.28-.53L16 4.94l-1.47-1.47a.75.75 0 0 0-1.06 0L12 4.94l-1.47-1.47a.75.75 0 0 0-1.06 0L8 4.94 6.53 3.47ZM9.5 9.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5ZM8.75 13a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z"
		clip-rule="evenodd"
	/>
</svg>
