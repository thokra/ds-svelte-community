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
		d="M12.75 3a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V3ZM15 11.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Zm-3 3a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Zm-9-3a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H3Zm15.894-6.144a.75.75 0 0 1 0 1.06l-4.243 4.243a.75.75 0 0 1-1.06-1.06l4.242-4.243a.75.75 0 0 1 1.061 0Zm-4.243 8.485a.75.75 0 1 0-1.06 1.06l4.242 4.243a.75.75 0 0 0 1.061-1.06l-4.243-4.243Zm-4.242 0a.75.75 0 0 1 0 1.06l-4.242 4.243a.75.75 0 1 1-1.061-1.06l4.243-4.243a.75.75 0 0 1 1.06 0ZM6.167 5.106a.75.75 0 1 0-1.061 1.06l4.243 4.243a.75.75 0 1 0 1.06-1.06L6.167 5.105Z"
		clip-rule="evenodd"
	/>
</svg>
