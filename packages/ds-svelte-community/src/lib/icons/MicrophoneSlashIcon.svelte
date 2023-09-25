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
		d="M8.422 5.376A3.751 3.751 0 0 1 15.75 6.5v4.965a.75.75 0 1 1-1.5 0V6.5a2.25 2.25 0 0 0-4.397-.675.75.75 0 1 1-1.431-.449ZM5.47 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06Zm4.522 7.047a.75.75 0 1 0-1.338.678c.36.71.938 1.288 1.647 1.649a.75.75 0 0 0 .68-1.337 2.263 2.263 0 0 1-.989-.99ZM7 9.75a.75.75 0 0 1 .75.75v1a4.25 4.25 0 0 0 5.005 4.183.75.75 0 0 1 .265 1.477c-.12.021-.242.04-.365.053v2.537h1.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25v-2.562A5.751 5.751 0 0 1 6.25 11.5v-1A.75.75 0 0 1 7 9.75Zm10.75.75a.75.75 0 0 0-1.5 0v1c0 .5-.086.979-.244 1.422a.75.75 0 0 0 1.414.502c.214-.602.33-1.25.33-1.924v-1Z"
		clip-rule="evenodd"
	/>
</svg>
