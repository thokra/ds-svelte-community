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
		d="M16.538 1.636a.75.75 0 0 0-1.312 0l-5 9a.75.75 0 0 0 .656 1.114h10a.75.75 0 0 0 .656-1.114l-5-9Zm-4.35 1.614a.25.25 0 0 1 .22.371L9.318 9.18a.258.258 0 0 1-.059.072 4.25 4.25 0 1 0 6.882 4.204.26.26 0 0 1 .252-.205h4.488c.174 0 .345-.02.511-.059.174-.04.357.082.357.26V18A1.75 1.75 0 0 1 20 19.75H4A1.75 1.75 0 0 1 2.25 18V8c0-.966.784-1.75 1.75-1.75h3.28a.25.25 0 0 0 .236-.17l.772-2.317A.75.75 0 0 1 9 3.25h3.189Zm-2.852 9.935c-.057-.22.22-.353.417-.239.338.196.726.304 1.129.304h3.434c.166 0 .286.159.221.312a2.75 2.75 0 0 1-5.201-.377Z"
		clip-rule="evenodd"
	/>
</svg>
