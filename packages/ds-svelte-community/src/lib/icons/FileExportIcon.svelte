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
		d="M6.5 3.25c-.69 0-1.25.56-1.25 1.25v15c0 .69.56 1.25 1.25 1.25h11c.69 0 1.25-.56 1.25-1.25v-1.75a.75.75 0 0 0-1.5 0v1.5H6.75V4.75h6.5V7.5c0 .69.56 1.25 1.25 1.25h2.75v1.5a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-.22-.53l-4-4a.75.75 0 0 0-.53-.22H6.5Zm9.69 4-1.44-1.44v1.44h1.44Zm-1.97 10.53a.75.75 0 0 1 0-1.06l1.97-1.97H9.75a.75.75 0 0 1 0-1.5h6.44l-1.97-1.97a.75.75 0 1 1 1.06-1.06l3.25 3.25a.748.748 0 0 1 .22.523v.014a.748.748 0 0 1-.22.523l-3.25 3.25a.75.75 0 0 1-1.06 0Z"
		clip-rule="evenodd"
	/>
</svg>
