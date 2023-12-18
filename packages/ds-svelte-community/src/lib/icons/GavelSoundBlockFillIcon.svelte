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
		d="M11 3.25a.75.75 0 0 1 .53.22l4.5 4.5a.75.75 0 0 1 0 1.06l-.707.707a1.75 1.75 0 0 1-1.237.513h-.672a.25.25 0 0 0-.177.073l-.926.927 7.22 7.22a.75.75 0 1 1-1.061 1.06l-7.22-7.22-.927.927a.25.25 0 0 0-.073.177v.672c0 .464-.184.909-.513 1.237l-.707.707a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 .002-1.063l.708-.7a1.75 1.75 0 0 1 1.231-.507h.674a.25.25 0 0 0 .177-.073l2.915-2.924a.25.25 0 0 0 .073-.176v-.673c0-.464.184-.909.513-1.237l.707-.707a.75.75 0 0 1 .53-.22ZM3.25 18.5c0-.966.784-1.75 1.75-1.75h8c.966 0 1.75.784 1.75 1.75V20a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-1.5Z"
		clip-rule="evenodd"
	/>
</svg>
