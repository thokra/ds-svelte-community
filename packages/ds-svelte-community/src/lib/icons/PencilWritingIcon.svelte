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
		d="M14.97 4.47a3.198 3.198 0 0 1 4.562.001c1.26 1.27 1.268 3.368-.002 4.637l-8.5 8.5a.75.75 0 0 1-.38.204l-4.5.922a.75.75 0 0 1-.882-.897l1-4.5a.75.75 0 0 1 .202-.367l8.5-8.5Zm3.498 1.058a1.698 1.698 0 0 0-2.438.002l-.97.97 2.479 2.478.93-.93c.68-.68.681-1.832-.001-2.52ZM7.685 13.876 14 7.56l2.478 2.478-6.35 6.35-3.145.644.702-3.157ZM3.5 20.25a.75.75 0 0 0 0 1.5h17a.75.75 0 0 0 0-1.5h-17Z"
		clip-rule="evenodd"
	/>
</svg>
