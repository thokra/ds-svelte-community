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
		d="M20.53 4.53a.75.75 0 0 0-1.06-1.06l-16 16a.75.75 0 1 0 1.06 1.06l16-16ZM12.75 5a.75.75 0 0 0-1.219-.586L6.738 8.25H3a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h2.114a.75.75 0 0 0 0-1.5H3.75v-4.5H7a.75.75 0 0 0 .469-.164L11.25 6.56v1.55a.75.75 0 0 0 1.5 0V5Zm0 10.887a.75.75 0 0 0-1.5 0v1.552l-.51-.407a.75.75 0 1 0-.937 1.171l1.728 1.383A.75.75 0 0 0 12.75 19v-3.113Zm6.906-8.68a.75.75 0 0 1 1.01.322 9.712 9.712 0 0 1 1.084 4.47 9.722 9.722 0 0 1-2.858 6.897.75.75 0 0 1-1.06-1.06A8.222 8.222 0 0 0 20.25 12a8.21 8.21 0 0 0-.916-3.783.75.75 0 0 1 .322-1.01Zm-1.227 2.732a.75.75 0 1 0-1.428.458c.162.504.249 1.043.249 1.603 0 1.45-.587 2.763-1.54 3.714a.75.75 0 1 0 1.06 1.061A6.731 6.731 0 0 0 18.75 12c0-.717-.112-1.41-.32-2.06Zm-3.007 1.921a.75.75 0 0 1 .608.87 4.152 4.152 0 0 1-1.156 2.214.75.75 0 1 1-1.06-1.062c.378-.378.642-.867.739-1.414a.75.75 0 0 1 .87-.608Z"
		clip-rule="evenodd"
	/>
</svg>
