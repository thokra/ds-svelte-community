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
		d="M12.53 3.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06l2.22-2.22v5.69a.75.75 0 0 0 1.5 0V5.81l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5ZM6 4.25a.75.75 0 0 0-.696.471L2.31 12.205a.744.744 0 0 0-.06.311V19c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75v-6.483a.743.743 0 0 0-.06-.311L18.696 4.72A.75.75 0 0 0 18 4.25h-1a.75.75 0 0 0 0 1.5h.492l2.4 6h-2.774a1.75 1.75 0 0 0-1.565.967l-.947 1.895a.25.25 0 0 1-.224.138H9.618a.25.25 0 0 1-.224-.138l-.947-1.895a1.75 1.75 0 0 0-1.565-.967H4.108l2.4-6H7a.75.75 0 0 0 0-1.5H6Zm-2.25 9v5h16.5v-5h-3.132a.25.25 0 0 0-.224.138l-.947 1.895a1.75 1.75 0 0 1-1.565.967H9.618a1.75 1.75 0 0 1-1.565-.967l-.947-1.895a.25.25 0 0 0-.224-.138H3.75Z"
		clip-rule="evenodd"
	/>
</svg>
