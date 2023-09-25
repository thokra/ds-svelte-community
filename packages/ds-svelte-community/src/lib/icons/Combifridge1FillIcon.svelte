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
		d="M5.25 3A.75.75 0 0 1 6 2.25h12a.75.75 0 0 1 .75.75v8a.25.25 0 0 1-.25.25H8a.25.25 0 0 1-.25-.25v-.5A.75.75 0 0 0 7 9.75H5.5a.25.25 0 0 1-.25-.25V3Zm.25 8.25a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25H6a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25h-.5Zm0 3a.25.25 0 0 0-.25.25V21c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-8a.25.25 0 0 0-.25-.25H8a.25.25 0 0 0-.25.25v.5a.75.75 0 0 1-.75.75H5.5Zm7.5-10a.75.75 0 0 1 .75.75v.701l.607-.35a.75.75 0 0 1 .75 1.298L14.5 7l.607.351a.75.75 0 0 1-.75 1.3L13.75 8.3V9a.75.75 0 0 1-1.5 0v-.7l-.607.35a.75.75 0 1 1-.75-1.3L11.5 7l-.607-.35a.75.75 0 0 1 .75-1.3l.607.35V5a.75.75 0 0 1 .75-.75Zm.53 10.22-.53-.53-.53.53a9.042 9.042 0 0 0-1.027 1.235c-.321.471-.693 1.136-.693 1.796a2.25 2.25 0 0 0 4.5 0c0-.66-.372-1.325-.693-1.796a9.042 9.042 0 0 0-1.027-1.235Zm-1.28 3.03c0-.168.128-.504.432-.95.1-.148.21-.292.318-.426.108.134.217.278.318.426.304.446.432.782.432.95a.75.75 0 0 1-1.5 0Z"
		clip-rule="evenodd"
	/>
</svg>
