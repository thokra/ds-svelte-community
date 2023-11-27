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
		d="M19.67 16.335a.75.75 0 0 0-.032-.73l.016.025-.089-.177a3.25 3.25 0 0 1 0-2.906l.089-.177.014-.028a.75.75 0 0 0 .064-.505L17.82 3.23a1.25 1.25 0 0 0-1.22-.979H8.664A2.75 2.75 0 0 0 5.96 4.5l-1.64 8.88c-.046.2-.07.407-.07.62v.032c.01.775.339 1.473.863 1.968A2.75 2.75 0 0 0 7 20.75h12a.75.75 0 0 0 .67-1.085l-.105-.212a3.25 3.25 0 0 1 0-2.906l.106-.212Zm-1.78 2.915a4.75 4.75 0 0 1 0-2.5H7a1.25 1.25 0 1 0 0 2.5h10.89ZM5.75 14.015a1.25 1.25 0 0 0 1.217 1.235H17.89a4.753 4.753 0 0 1 0-2.5H7a1.25 1.25 0 0 0-1.213.947l-.028.15A1.26 1.26 0 0 0 5.75 14v.015ZM9.47 5a.25.25 0 0 0-.247.219l-.188 1.5A.25.25 0 0 0 9.283 7h5.434a.25.25 0 0 0 .248-.281l-.188-1.5A.25.25 0 0 0 14.53 5H9.471Z"
		clip-rule="evenodd"
	/>
</svg>
