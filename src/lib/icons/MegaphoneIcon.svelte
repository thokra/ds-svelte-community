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
		d="M17.787 5.307A.75.75 0 0 1 18.25 6v12a.75.75 0 0 1-1.28.53l-.615-.614a7.25 7.25 0 0 0-4.1-2.05l-.005-.001V19a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1-.75-.75v-3.325A3.751 3.751 0 0 1 9.5 8.25h1.567c.253 0 .505-.018.755-.054l.432-.061a7.25 7.25 0 0 0 4.101-2.051l.395.395-.395-.395.615-.614a.75.75 0 0 1 .817-.163ZM10.75 14.25v-4.5H9.5a2.25 2.25 0 1 0 0 4.5h1.25Zm1.716.13-.216-.03v-4.7l.216-.03a8.75 8.75 0 0 0 4.284-1.874v8.508a8.75 8.75 0 0 0-4.284-1.874Zm-2.216 1.37v2.5h.5v-2.5h-.5Z"
		clip-rule="evenodd"
	/>
</svg>
