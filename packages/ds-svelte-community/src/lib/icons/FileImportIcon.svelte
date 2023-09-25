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
		d="M6.75 19.25V4.75h6.5V7.5c0 .69.56 1.25 1.25 1.25h2.75v1.5a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-.22-.53l-4-4a.75.75 0 0 0-.53-.22H6.5c-.69 0-1.25.56-1.25 1.25v15c0 .69.56 1.25 1.25 1.25h11c.69 0 1.25-.56 1.25-1.25v-1.75a.75.75 0 0 0-1.5 0v1.5H6.75Zm9.44-12-1.44-1.44v1.44h1.44Zm-2.66 2.97a.75.75 0 0 1 0 1.06l-1.97 1.97H18a.75.75 0 0 1 0 1.5h-6.44l1.97 1.97a.75.75 0 1 1-1.06 1.06l-3.25-3.249-.007-.007a.747.747 0 0 1 0-1.048l.007-.007 3.25-3.25a.75.75 0 0 1 1.06 0Z"
		clip-rule="evenodd"
	/>
</svg>
