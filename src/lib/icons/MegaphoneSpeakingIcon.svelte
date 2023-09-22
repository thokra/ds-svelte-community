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
		d="M19.03 4.97a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0Zm-4.743.337A.75.75 0 0 1 14.75 6v12a.75.75 0 0 1-1.28.53l-.615-.614a7.25 7.25 0 0 0-4.1-2.05l-.005-.001V19a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-3.325A3.751 3.751 0 0 1 6 8.25h1.567c.253 0 .505-.018.755-.054l.432-.061a7.25 7.25 0 0 0 4.101-2.05l.395.394-.395-.395.615-.614a.75.75 0 0 1 .817-.163ZM6.75 15.75v2.5h.5v-2.5h-.5Zm.5-1.5H6a2.25 2.25 0 0 1 0-4.5h1.25v4.5Zm1.5.1.216.03a8.75 8.75 0 0 1 4.284 1.874V7.746A8.75 8.75 0 0 1 8.966 9.62l-.216.03v4.7ZM19 11.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Zm-2.53 5.22a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06Z"
		clip-rule="evenodd"
	/>
</svg>
