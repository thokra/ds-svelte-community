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
		d="M10.75 5.5a.75.75 0 0 0-1.5 0v1.25H4a.75.75 0 0 0 0 1.5h1.948a14.596 14.596 0 0 0 2.995 5.197 13.097 13.097 0 0 1-3.731 2.36.75.75 0 0 0 .576 1.385A14.593 14.593 0 0 0 10 14.513c.18.164.364.323.552.478a.75.75 0 1 0 .953-1.159 12.962 12.962 0 0 1-.448-.385 14.596 14.596 0 0 0 2.995-5.197H16a.75.75 0 0 0 0-1.5h-5.25V5.5ZM10 12.378a13.097 13.097 0 0 0 2.464-4.128H7.536A13.097 13.097 0 0 0 10 12.378Zm6.185-2.183a.75.75 0 0 0-1.37 0l-4 9a.75.75 0 0 0 1.37.61l.913-2.055h4.803l.914 2.055a.75.75 0 0 0 1.37-.61l-4-9Zm1.05 6.055L15.5 12.347l-1.735 3.903h3.47Z"
		clip-rule="evenodd"
	/>
</svg>
