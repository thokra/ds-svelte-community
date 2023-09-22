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
		d="M4.25 7.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Zm3.72 2.585A3.25 3.25 0 1 1 9.1 8.478l1.456.822 6.506-1.952a1.75 1.75 0 0 1 .79-.05l2.771.462a.75.75 0 0 1 .234 1.4L9.102 15.527a3.25 3.25 0 1 1-1.132-1.612c.483-.66.685-1.462.607-2.241l-.112-.58a3.226 3.226 0 0 0-.495-1.009Zm-.579 5.353a1.75 1.75 0 1 0-2.782 2.123 1.75 1.75 0 0 0 2.782-2.123Zm5.135-.147a.25.25 0 0 1-.047-.46l3.99-2.16a.25.25 0 0 1 .235-.003l4.144 2.167a.75.75 0 0 1-.225 1.405l-2.77.462a1.75 1.75 0 0 1-.791-.05l-4.536-1.361Z"
		clip-rule="evenodd"
	/>
</svg>
