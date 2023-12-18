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
		d="M12.375 2.35a.75.75 0 0 0-.75 0L4.58 6.418a.25.25 0 0 0 0 .433l7.295 4.21a.25.25 0 0 0 .25 0l7.294-4.21a.958.958 0 0 1 .023-.013.23.23 0 0 0 .007-.403L12.375 2.35Zm8.169 6.017a.25.25 0 0 0-.367-.22l-.02.01-7.282 4.204a.25.25 0 0 0-.125.216V21a.25.25 0 0 0 .375.216l7.044-4.067a.75.75 0 0 0 .375-.649V8.367Zm-9.669 12.85A.25.25 0 0 0 11.25 21v-8.422a.25.25 0 0 0-.125-.217l-7.294-4.21a.25.25 0 0 0-.375.216V16.5a.75.75 0 0 0 .375.65l7.044 4.067Z"
		clip-rule="evenodd"
	/>
</svg>
