<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
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
		d="M5.186 4.506a4.288 4.288 0 0 1 3.826-1.51l1.061.132a6.75 6.75 0 0 1 1.927.54 6.75 6.75 0 0 1 1.927-.54l1.061-.132a4.288 4.288 0 0 1 4.6 5.611l-1.078 3.234a4.75 4.75 0 0 1-1.147 1.857l-.135.134-.384 5.387a2.187 2.187 0 0 1-4.32.302L12 17.079l-.523 2.442a2.187 2.187 0 0 1-4.32-.302l-.385-5.387-.134-.134A4.75 4.75 0 0 1 5.49 11.84L4.412 8.607a4.288 4.288 0 0 1 .774-4.101Z"
		clip-rule="evenodd"
	/>
</svg>
