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
		d="M18.25 2.5a.75.75 0 0 0-1.5 0v.882c0 .97.548 1.855 1.415 2.289.358.18.585.546.585.947V7.5a.75.75 0 0 0 1.5 0v-.882a2.56 2.56 0 0 0-1.415-2.289 1.059 1.059 0 0 1-.585-.947V2.5ZM7.53 6.47a.75.75 0 0 0-1.06 1.06l1.72 1.72H3a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h5.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 1 0 1.06-1.06l-1.72-1.72H20A1.75 1.75 0 0 0 21.75 13v-2A1.75 1.75 0 0 0 20 9.25h-4.19l1.72-1.72a.75.75 0 0 0-1.06-1.06L12 10.94 7.53 6.47ZM20 13.25h-1.25v-2.5H20a.25.25 0 0 1 .25.25v2a.25.25 0 0 1-.25.25Zm-5.5 0h2.75v-2.5H14.5a.755.755 0 0 1-.17-.02L13.06 12l1.27 1.27a.755.755 0 0 1 .17-.02ZM10.94 12l-1.27 1.27a.756.756 0 0 0-.17-.02H3.75v-2.5H9.5a.756.756 0 0 0 .17-.02L10.94 12Z"
		clip-rule="evenodd"
	/>
</svg>
