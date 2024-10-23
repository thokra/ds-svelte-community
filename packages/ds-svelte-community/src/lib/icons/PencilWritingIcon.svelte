<script lang="ts" module>
	import newUniqueId from "$lib/components/local-unique-id";
</script>

<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		/**
		 * Title of the icon, used for accessibility
		 */
		title?: string;

		children?: Snippet;

		[key: string]: unknown;
	};

	let { title, children, ...restProps }: Props = $props();

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
	{...restProps}
>
	{#if title}
		<title {id}>{title}</title>
	{/if}
	{#if children}
		{@render children()}
	{/if}
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M14.97 4.47a3.2 3.2 0 0 1 4.562.001c1.26 1.27 1.268 3.368-.002 4.637l-8.5 8.5a.75.75 0 0 1-.38.204l-4.5.922a.75.75 0 0 1-.882-.897l1-4.5a.75.75 0 0 1 .202-.367zm3.498 1.058a1.7 1.7 0 0 0-2.438.002l-.97.97 2.479 2.478.93-.93c.68-.68.681-1.832-.001-2.52M7.685 13.876 14 7.56l2.478 2.478-6.35 6.35-3.145.644zM3.5 20.25a.75.75 0 0 0 0 1.5h17a.75.75 0 0 0 0-1.5z"
		clip-rule="evenodd"
	/>
</svg>
