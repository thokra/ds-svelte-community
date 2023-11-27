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
		d="M15 5.25H7.875a.75.75 0 0 0 0 1.5H15a.25.25 0 0 1 .25.25v7.4a.747.747 0 0 0 .538.72l4.983 1.594A.75.75 0 0 0 21.75 16V8a.75.75 0 0 0-.979-.714L16.75 8.573V7A1.75 1.75 0 0 0 15 5.25Zm5.25 9.723-3.5-1.12v-3.705l3.5-1.12v5.945ZM3.75 10.5a.75.75 0 0 0-1.5 0V17c0 .966.784 1.75 1.75 1.75h7.125a.75.75 0 0 0 0-1.5H4a.25.25 0 0 1-.25-.25v-6.5Zm.28-5.03a.75.75 0 0 0-1.06 1.06l12 12a.75.75 0 1 0 1.06-1.06l-12-12Z"
		clip-rule="evenodd"
	/>
</svg>
