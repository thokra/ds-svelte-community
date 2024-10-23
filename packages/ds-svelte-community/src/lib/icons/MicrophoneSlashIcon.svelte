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
		d="M8.422 5.376A3.751 3.751 0 0 1 15.75 6.5v4.965a.75.75 0 1 1-1.5 0V6.5a2.25 2.25 0 0 0-4.397-.675.75.75 0 1 1-1.431-.449M5.47 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06m4.522 7.047a.75.75 0 1 0-1.338.678c.36.71.938 1.288 1.647 1.649a.75.75 0 0 0 .68-1.337 2.26 2.26 0 0 1-.989-.99M17 9.75a.75.75 0 0 1 .75.75v1c0 .674-.116 1.322-.33 1.924a.75.75 0 0 1-1.414-.502 4.2 4.2 0 0 0 .244-1.422v-1a.75.75 0 0 1 .75-.75m-9.25.75a.75.75 0 0 0-1.5 0v1a5.75 5.75 0 0 0 4.905 5.688v2.562h-1.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25v-2.537q.185-.021.365-.053a.75.75 0 0 0-.265-1.477A4.25 4.25 0 0 1 7.75 11.5z"
		clip-rule="evenodd"
	/>
</svg>
