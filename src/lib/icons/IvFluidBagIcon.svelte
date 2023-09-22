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
		d="M11 4.25a1.248 1.248 0 0 1 2 0h-2Zm-1.646 0a2.751 2.751 0 0 1 5.293 0H17a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75h-4.25V21a.75.75 0 0 1-1.5 0v-1.25H7a.75.75 0 0 1-.75-.75V5A.75.75 0 0 1 7 4.25h2.354Zm6.896 14h-8.5V5.75h8.5v12.5ZM12 8.75l.646-.38a.75.75 0 0 0-1.292 0l.646.38Zm-.331 2.175c.112-.222.224-.436.331-.635.107.199.219.413.331.635.245.484.484.989.66 1.432.188.478.259.776.259.893a1.25 1.25 0 1 1-2.5 0c0-.117.07-.415.26-.893.175-.443.414-.948.659-1.432Zm-.315-2.556L12 8.75l.646-.38.002.003.005.008.018.03.065.113a36.296 36.296 0 0 1 .933 1.723c.255.503.516 1.054.716 1.558.186.47.365 1.01.365 1.445a2.75 2.75 0 1 1-5.5 0c0-.435.18-.976.365-1.445.2-.504.461-1.055.716-1.558a37.404 37.404 0 0 1 .933-1.723l.066-.113.017-.03.005-.008.001-.003Z"
		clip-rule="evenodd"
	/>
</svg>
