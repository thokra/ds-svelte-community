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
		d="M8.25 7.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5ZM8.288 17.288a5.25 5.25 0 0 1 4.15-1.52.75.75 0 1 0 .124-1.495 6.745 6.745 0 0 0-5.335 1.954A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 1.5 0 5.25 5.25 0 0 1 1.538-3.712Zm8.296-2.912a.75.75 0 0 1 .832 0l3 2a.75.75 0 0 1 .334.624v4a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .334-.624l3-2Zm-1.834 3.838v2.036h4.5v-2.037l-1.915.958a.75.75 0 0 1-.67 0l-1.915-.957Zm.741-1.307 1.509.755 1.509-.755L17 15.901l-1.509 1.006Z"
		clip-rule="evenodd"
	/>
</svg>
