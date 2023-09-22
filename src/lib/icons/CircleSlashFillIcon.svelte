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
		d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75a9.72 9.72 0 0 0 6.878-2.84l-.004.005.041-.042-.004.004A9.72 9.72 0 0 0 21.75 12 9.75 9.75 0 0 0 12 2.25Zm6.179 14.867a.245.245 0 0 1 .013.335 8.324 8.324 0 0 1-.74.739.245.245 0 0 1-.334-.013L5.822 6.882a.245.245 0 0 1-.013-.335 8.3 8.3 0 0 1 .739-.739.245.245 0 0 1 .334.013L18.18 17.117Z"
		clip-rule="evenodd"
	/>
</svg>
