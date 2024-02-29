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
		d="M7.58 5.58a6.25 6.25 0 0 1 8.84 0c2.409 2.41 2.3 6.175-.037 8.88-.484.56-1.73 2.083-2.846 3.453l-1.48 1.824-.057.07-.057-.07c-.39-.481-.92-1.135-1.48-1.823-1.115-1.371-2.361-2.895-2.845-3.455C5.28 11.755 5.17 7.99 7.58 5.581ZM12 21l.584.471L12 21Zm-.583.471h-.001l-.173-.214A1101.117 1101.117 0 0 0 9.3 18.86c-1.122-1.38-2.35-2.881-2.816-3.42-2.762-3.195-3.02-7.862.037-10.92a7.75 7.75 0 0 1 10.96 0c3.058 3.058 2.8 7.725.037 10.92-.465.539-1.694 2.04-2.816 3.42a1103.324 1103.324 0 0 0-1.944 2.397l-.173.214a.75.75 0 0 1-1.167 0ZM12 21l-.583.471L12 21ZM9.75 10a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM12 6.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"
		clip-rule="evenodd"
	/>
</svg>
