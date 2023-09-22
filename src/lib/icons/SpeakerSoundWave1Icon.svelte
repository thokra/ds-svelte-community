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
		d="M12.75 5a.75.75 0 0 0-1.219-.586L6.737 8.25H3a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h3.737l4.794 3.836A.75.75 0 0 0 12.75 19V5ZM7.469 9.586 11.25 6.56v10.88l-3.781-3.026A.75.75 0 0 0 7 14.25H3.75v-4.5H7a.75.75 0 0 0 .469-.164Zm7.405-.53a.75.75 0 1 0-1.06 1.062 2.65 2.65 0 0 1 .78 1.882c0 .735-.298 1.4-.78 1.882a.75.75 0 1 0 1.06 1.061A4.15 4.15 0 0 0 16.094 12a4.15 4.15 0 0 0-1.22-2.943Z"
		clip-rule="evenodd"
	/>
</svg>
