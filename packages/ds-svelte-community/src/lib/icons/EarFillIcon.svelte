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
		d="M12.979 2.269C9.706 1.765 6.706 3.804 5.817 6.8c-.384 1.294.02 2.607.328 3.611.224.725.407 1.517.407 2.121 0 .604-.183 1.396-.407 2.121l-.018.06c-.302.98-.715 2.316-.234 3.59a5.328 5.328 0 0 0 10.094-.376l2.196-7.467c1.101-3.743-1.348-7.598-5.204-8.191Zm-.362 3.607a3.417 3.417 0 0 0-4.065 3.355v1.77c0 .413.336.75.75.75a1.25 1.25 0 1 1 0 2.5.75.75 0 0 0 0 1.5 2.75 2.75 0 0 0 .75-5.397V9.23a1.917 1.917 0 1 1 3.767.506l-.292 1.065a.75.75 0 0 0 1.447.396l.291-1.065a3.417 3.417 0 0 0-2.648-4.257Z"
		clip-rule="evenodd"
	/>
</svg>
