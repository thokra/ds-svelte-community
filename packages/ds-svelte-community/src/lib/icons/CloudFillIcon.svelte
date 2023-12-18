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
		d="M5.17 11.62c.232-3.297 2.724-5.87 5.885-5.87 2.435 0 4.29 1.38 5.368 3.597.042.085.07.118.08.129a.698.698 0 0 0 .239.025c1.515 0 2.77.46 3.656 1.266.887.807 1.352 1.917 1.352 3.104 0 2.46-1.968 4.379-4.451 4.379H5.848c-1.024 0-1.927-.278-2.586-.852-.67-.582-1.012-1.406-1.012-2.332 0-.798.259-1.517.762-2.093.497-.568 1.194-.954 2.007-1.17l.01-.003a.78.78 0 0 0 .12-.038.838.838 0 0 0 .02-.14v-.002Z"
		clip-rule="evenodd"
	/>
</svg>
