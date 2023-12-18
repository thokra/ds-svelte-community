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
		d="M11.53 3.47a.75.75 0 0 0-1.06 0l-.707.707a1.75 1.75 0 0 0-.513 1.237v.673a.25.25 0 0 1-.073.176L6.262 9.187a.25.25 0 0 1-.177.073H5.41a1.75 1.75 0 0 0-1.23.507l-.709.7a.75.75 0 0 0-.002 1.063l4.5 4.5a.75.75 0 0 0 1.06 0l.707-.707a1.75 1.75 0 0 0 .513-1.237v-.672a.25.25 0 0 1 .073-.177l.927-.926 7.22 7.22a.75.75 0 1 0 1.06-1.061l-7.22-7.22.927-.927a.25.25 0 0 1 .177-.073h.672c.464 0 .909-.184 1.237-.513l.707-.707a.75.75 0 0 0 0-1.06l-4.5-4.5Zm-.707 1.767L11 5.061 14.44 8.5l-.177.177a.25.25 0 0 1-.177.073h-.672c-.179 0-.355.027-.523.08l-2.22-2.22a1.75 1.75 0 0 0 .079-.523v-.673a.25.25 0 0 1 .073-.177ZM9.751 7.812 7.815 9.754l1.935 1.935 1.94-1.939-1.94-1.938ZM6.085 10.76c.182 0 .361-.028.532-.082L8.83 12.89a1.75 1.75 0 0 0-.08.523v.672a.25.25 0 0 1-.073.177l-.177.176-3.437-3.436.172-.17a.25.25 0 0 1 .176-.073h.674Z"
		clip-rule="evenodd"
	/>
</svg>
