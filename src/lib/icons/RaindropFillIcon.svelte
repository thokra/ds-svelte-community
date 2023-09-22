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
		d="M12.002 2.25c.452 0 .722.314.84.52l.01.017 3.357 6.61.001.002.083.162c.957 1.871 1.957 3.825 1.957 5.876 0 3.526-2.784 6.313-6.26 6.313-3.478 0-6.24-2.79-6.24-6.313 0-2.05.982-4.004 1.924-5.88l.078-.154.003-.008 3.401-6.589c.114-.228.382-.556.846-.556Z"
		clip-rule="evenodd"
	/>
</svg>
