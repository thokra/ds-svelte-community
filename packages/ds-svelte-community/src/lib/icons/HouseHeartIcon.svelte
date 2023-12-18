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
		d="M12.53 2.47a.75.75 0 0 0-1.06 0l-7 7a.75.75 0 0 0-.22.53v11c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.22-.53l-7-7ZM5.75 20.25v-9.94L12 4.06l6.25 6.25v9.94H5.75Zm4.28-7.22c.26-.26.68-.26.94 0l.5.5a.75.75 0 0 0 1.06 0l.5-.5a.664.664 0 1 1 .94.94L12 15.94l-1.97-1.97a.664.664 0 0 1 0-.94ZM12 11.94a2.164 2.164 0 0 0-3.03 3.09l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5A2.164 2.164 0 0 0 12 11.94Z"
		clip-rule="evenodd"
	/>
</svg>
