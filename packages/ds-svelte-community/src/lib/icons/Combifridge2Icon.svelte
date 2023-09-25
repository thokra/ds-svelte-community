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
		d="M5.25 3A.75.75 0 0 1 6 2.25h12a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V3Zm1.5 8.25v1.5h.5v-1.5h-.5Zm2 0v-.75A.75.75 0 0 0 8 9.75H6.75v-6h10.5v7.5h-8.5Zm0 1.5v.75a.75.75 0 0 1-.75.75H6.75v6h10.5v-7.5h-8.5Zm4.25 1a.75.75 0 0 1 .75.75v.701l.607-.35a.75.75 0 0 1 .75 1.298l-.607.351.607.35a.75.75 0 0 1-.75 1.3l-.607-.351v.701a.75.75 0 0 1-1.5 0v-.7l-.607.35a.75.75 0 0 1-.75-1.3l.607-.35-.607-.35a.75.75 0 1 1 .75-1.3l.607.35v-.7a.75.75 0 0 1 .75-.75Zm.53-8.78L13 4.44l-.53.53a9.04 9.04 0 0 0-1.027 1.235c-.321.47-.693 1.136-.693 1.795a2.25 2.25 0 0 0 4.5 0c0-.66-.372-1.324-.693-1.795A9.04 9.04 0 0 0 13.53 4.97ZM12.25 8c0-.17.128-.504.432-.951.1-.148.21-.292.318-.426.108.134.217.278.318.426.304.447.432.782.432.951a.75.75 0 0 1-1.5 0Z"
		clip-rule="evenodd"
	/>
</svg>
