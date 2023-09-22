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
		d="M7.81 3.706a.75.75 0 0 1 .69-.456H20a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.291.519l-11.5-12a.75.75 0 0 1-.149-.813Zm2.448 1.044 8.992 9.383V4.75h-8.992ZM7.03 5.97a.75.75 0 0 0-1.06 0L3.177 8.763a1.75 1.75 0 0 0 0 2.474l9.586 9.586a1.75 1.75 0 0 0 2.474 0l2.793-2.793a.75.75 0 0 0 0-1.06l-11-11ZM4.237 9.823 6.5 7.561 8.44 9.5l-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97L10.94 12l-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97 1.44 1.44-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97 1.94 1.94-2.263 2.263a.25.25 0 0 1-.354 0l-9.586-9.586a.25.25 0 0 1 0-.354ZM16 6.5a.75.75 0 0 0-.53 1.28l.75.75A.75.75 0 0 0 17.5 8v-.75a.75.75 0 0 0-.75-.75H16Z"
		clip-rule="evenodd"
	/>
</svg>
