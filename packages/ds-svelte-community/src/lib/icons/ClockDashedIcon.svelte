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
		d="M4.5 1.75a.75.75 0 0 1 .75.75v2.464a9.75 9.75 0 1 1 12.342 15.023.75.75 0 1 1-.86-1.229A8.251 8.251 0 1 0 6.084 6.25H9a.75.75 0 0 1 0 1.5H4.5A.75.75 0 0 1 3.75 7V2.5a.75.75 0 0 1 .75-.75Zm7.5 3.5a.75.75 0 0 1 .75.75v5.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V6a.75.75 0 0 1 .75-.75Zm-9 6a.75.75 0 0 1 .75.75c0 .439.035.877.105 1.31a.75.75 0 0 1-1.481.24A9.75 9.75 0 0 1 2.25 12a.75.75 0 0 1 .75-.75Zm1.855 4.875a.75.75 0 0 0-1.299.75c.26.45.555.877.882 1.28a.75.75 0 1 0 1.163-.947 8.252 8.252 0 0 1-.746-1.083Zm1.995 3.294a.75.75 0 0 1 1.025-.274c.38.22.777.408 1.188.564a.75.75 0 0 1-.535 1.402 9.738 9.738 0 0 1-1.403-.667.75.75 0 0 1-.275-1.025Zm6.7 2.207a.75.75 0 0 0-.24-1.48 8.324 8.324 0 0 1-1.31.104.75.75 0 0 0 0 1.5c.519 0 1.037-.041 1.55-.124Z"
		clip-rule="evenodd"
	/>
</svg>
