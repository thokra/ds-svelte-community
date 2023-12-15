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
		d="M8.392 3.47a.75.75 0 0 0-1.06 0L4.25 6.55a1.853 1.853 0 0 0 0 2.622L14.827 19.75a1.853 1.853 0 0 0 2.621 0l3.082-3.082a.75.75 0 0 0 0-1.06L8.392 3.47ZM5.311 7.612l2.551-2.551 2.25 2.25a.782.782 0 0 0-.021.02L8.987 8.436a.75.75 0 0 0 1.06 1.06l1.104-1.103a.83.83 0 0 0 .021-.021l1.699 1.698a.716.716 0 0 0-.022.021l-1.104 1.104a.75.75 0 0 0 1.061 1.06l1.104-1.103a.853.853 0 0 0 .02-.022l1.7 1.699a.73.73 0 0 0-.023.021l-1.103 1.104a.75.75 0 0 0 1.06 1.06l1.104-1.103a.725.725 0 0 0 .021-.022l2.25 2.25-2.551 2.551a.354.354 0 0 1-.5 0L5.311 8.112a.353.353 0 0 1 0-.5Z"
		clip-rule="evenodd"
	/>
</svg>
