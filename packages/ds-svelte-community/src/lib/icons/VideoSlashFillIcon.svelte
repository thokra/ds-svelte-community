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
		d="M2.677 8.359a.25.25 0 0 0-.427.177V17c0 .966.784 1.75 1.75 1.75h8.464a.25.25 0 0 0 .177-.427L2.677 8.36Zm13.646 7.282a.25.25 0 0 0 .427-.177V7A1.75 1.75 0 0 0 15 5.25H6.536a.25.25 0 0 0-.177.427l9.964 9.964Zm1.927.084c0 .109.07.205.174.238l2.347.751A.75.75 0 0 0 21.75 16V8a.75.75 0 0 0-.979-.714l-2.347.75a.25.25 0 0 0-.174.239v7.45ZM4.03 5.47a.75.75 0 0 0-1.06 1.06l12 12a.75.75 0 1 0 1.06-1.06l-12-12Z"
		clip-rule="evenodd"
	/>
</svg>
