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
		d="M5.25 4.5c0-.69.56-1.25 1.25-1.25H14a.75.75 0 0 1 .53.22l4 4c.141.14.22.331.22.53v11.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25zm9.25 4.25c-.69 0-1.25-.56-1.25-1.25V4.75h-6.5v14.5h10.5V8.75zm.25-2.94 1.44 1.44h-1.44zm-4.784 5.216a2.027 2.027 0 0 1 3.488-1.405.75.75 0 0 1-1.08 1.041.526.526 0 1 0-.583.85l1.911.786a1.833 1.833 0 0 1 .238 3.272q.08.276.082.572a2.027 2.027 0 0 1-3.988.518.75.75 0 0 1 1.45-.385.527.527 0 1 0 .713-.62l-1.911-.786a1.833 1.833 0 0 1-.238-3.272 2 2 0 0 1-.082-.571m.89 2.456 1.791.737.027.01.218.078a.333.333 0 0 0 .24-.622l-1.792-.737-.026-.009-.218-.078a.333.333 0 0 0-.24.621"
		clip-rule="evenodd"
	/>
</svg>
