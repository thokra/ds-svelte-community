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
		d="M5.25 8a5.75 5.75 0 0 1 10.925-2.51c.093.194.24.26.33.26h.745a4.5 4.5 0 0 1 .794 8.93c-.156.028-.29-.105-.296-.264a2.242 2.242 0 0 0-.657-1.507l-3.5-3.5a2.25 2.25 0 0 0-3.182 0l-3.5 3.5a2.243 2.243 0 0 0-.659 1.562c-.002.15-.116.279-.265.279H5.5a3.25 3.25 0 0 1-.65-6.435.656.656 0 0 0 .326-.158c.057-.056.074-.105.074-.157Zm6.22 2.47a.748.748 0 0 1 1.06 0l3.5 3.5a.75.75 0 1 1-1.06 1.06l-2.22-2.22v7.69a.75.75 0 0 1-1.5 0v-7.69l-2.22 2.22a.75.75 0 0 1-1.06-1.06l3.5-3.5Z"
		clip-rule="evenodd"
	/>
</svg>
