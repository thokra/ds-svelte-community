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
		d="M6 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75H6Zm2 7.5a.75.75 0 0 1 .75.75v.75h8.5v-7.5H6.75v6H8Zm0 4.5a.75.75 0 0 0 .75-.75v-.75h8.5v7.5H6.75v-6H8Zm-1.25-1.5v-1.5h.5v1.5h-.5Zm6.25-8a.75.75 0 0 1 .75.75v.701l.607-.35a.75.75 0 1 1 .75 1.299l-.607.35.607.35a.75.75 0 0 1-.75 1.3l-.607-.351V9.5a.75.75 0 0 1-1.5 0v-.7l-.607.35a.75.75 0 1 1-.75-1.3l.607-.35-.607-.35a.75.75 0 1 1 .75-1.3l.607.35v-.7a.75.75 0 0 1 .75-.75Zm0 8.69.53.53c.274.273.682.727 1.027 1.235.321.47.693 1.136.693 1.795a2.25 2.25 0 0 1-4.5 0c0-.66.372-1.324.693-1.795a9.034 9.034 0 0 1 1.027-1.235l.53-.53Zm-.318 2.609c-.304.447-.432.782-.432.951a.75.75 0 0 0 1.5 0c0-.17-.128-.504-.432-.951-.1-.148-.21-.292-.318-.426a6.562 6.562 0 0 0-.318.426Z"
		clip-rule="evenodd"
	/>
</svg>
