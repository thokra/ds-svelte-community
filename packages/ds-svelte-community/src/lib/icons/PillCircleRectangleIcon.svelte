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
		d="M8.44 4.916a2.75 2.75 0 1 0-1.88 5.168 2.75 2.75 0 0 0 1.88-5.168Zm-4.934 1.13a4.25 4.25 0 1 1 7.988 2.908 4.25 4.25 0 0 1-7.988-2.908Zm16.681 1.767a3.75 3.75 0 0 0-5.303 0l-3.535 3.535-3.536 3.536a3.75 3.75 0 0 0 5.304 5.303l3.535-3.535 3.535-3.536a3.75 3.75 0 0 0 0-5.303Zm-4.242 1.06a2.25 2.25 0 0 1 3.182 3.182l-3.005 3.006-3.182-3.182 3.005-3.006Zm-4.066 4.066-3.005 3.005a2.25 2.25 0 0 0 3.182 3.182l3.005-3.005-3.182-3.182ZM9.166 7.692a.75.75 0 1 0-.513-1.41l-2.82 1.026a.75.75 0 1 0 .514 1.41l2.819-1.026Z"
		clip-rule="evenodd"
	/>
</svg>
