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
		d="M20 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Zm-9.645 8.361a.25.25 0 0 0-.105.204V17a.75.75 0 0 0 1.186.61l7-5a.75.75 0 0 0 0-1.22l-7-5A.75.75 0 0 0 10.25 7v2.185c0 .08.039.157.105.203l1.662 1.188a1.75 1.75 0 0 1 0 2.848l-1.662 1.188ZM4.435 6.39A.75.75 0 0 0 3.25 7v10a.75.75 0 0 0 1.186.61l7-5a.75.75 0 0 0 0-1.22l-7-5Z"
		clip-rule="evenodd"
	/>
</svg>
