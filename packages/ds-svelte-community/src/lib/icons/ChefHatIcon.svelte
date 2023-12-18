<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
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
		d="M12 3.75c-1.346 0-2.5.629-3.294 1.589l-.514-.334a3.75 3.75 0 0 0-4.085 6.29l1.357.88.79 7.9A.75.75 0 0 0 7 20.75h10a.75.75 0 0 0 .746-.675l.792-7.915 1.331-.865a3.75 3.75 0 1 0-4.084-6.29l-.507.329C14.485 4.4 13.384 3.75 12 3.75ZM9.55 6.74c.542-.922 1.43-1.49 2.45-1.49 1.027 0 1.86.561 2.466 1.502a.75.75 0 0 0 1.039.223l1.097-.712a2.25 2.25 0 1 1 2.45 3.774l-1.633 1.061a.75.75 0 0 0-.338.554l-.76 7.598H7.68l-.759-7.582a.75.75 0 0 0-.337-.554l-1.659-1.077a2.25 2.25 0 1 1 2.451-3.774l1.12.727a.75.75 0 0 0 1.055-.25ZM9 10.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"
		clip-rule="evenodd"
	/>
</svg>
