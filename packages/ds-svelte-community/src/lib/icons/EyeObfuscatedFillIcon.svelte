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
		d="M21.03 3.97a.75.75 0 0 1 0 1.06l-5.565 5.565-.021.021-4.828 4.828-.02.021L5.03 21.03a.75.75 0 0 1-1.06-1.06l3.288-3.29a12.244 12.244 0 0 1-3.417-2.46 12.38 12.38 0 0 1-1.099-1.273 9.06 9.06 0 0 1-.28-.398l-.105-.163a.751.751 0 0 1 0-.772c.052-.087.108-.17.165-.253.103-.15.255-.36.455-.61.4-.5.996-1.164 1.793-1.827C6.363 7.596 8.777 6.25 12 6.25c1.804 0 3.36.423 4.659 1.03l3.31-3.31a.75.75 0 0 1 1.061 0Zm-6.234 5.173a.239.239 0 0 0-.007-.35 4.247 4.247 0 0 0-5.794.202 4.25 4.25 0 0 0-.202 5.794.239.239 0 0 0 .35.007l.708-.708a.269.269 0 0 0 .011-.358 2.75 2.75 0 0 1 3.868-3.868.269.269 0 0 0 .358-.01l.708-.709Zm4.734.327a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06l7-7a.75.75 0 0 1 1.06 0Zm1.5 2.5a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0Z"
		clip-rule="evenodd"
	/>
</svg>
