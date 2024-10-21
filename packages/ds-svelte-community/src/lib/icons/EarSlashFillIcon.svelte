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
		d="M12.979 2.269C9.706 1.765 6.706 3.804 5.817 6.8c-.384 1.294.02 2.607.328 3.611.224.725.407 1.517.407 2.121 0 .604-.183 1.396-.407 2.121l-.018.06a.232.232 0 0 0 .387.237l2.89-2.89c.116-.116.063-.31-.102-.31a.75.75 0 0 1-.75-.75V9.231a3.417 3.417 0 0 1 5.779-2.47.265.265 0 0 0 .37.002l2.09-2.089a.243.243 0 0 0 .012-.334 6.407 6.407 0 0 0-3.824-2.071ZM8.023 20.92a.24.24 0 0 1-.036-.373L18.116 10.42c.03-.03.08-.001.067.04l-2.196 7.467a5.326 5.326 0 0 1-7.964 2.994Zm2.901-10.381a.266.266 0 0 1-.315.04 2.743 2.743 0 0 0-.377-.169.266.266 0 0 1-.18-.246V9.23a1.917 1.917 0 0 1 3.245-1.383c.092.089.084.235-.007.326l-2.366 2.366Zm9.606-5.01a.75.75 0 0 0-1.06-1.06l-15 15a.75.75 0 1 0 1.06 1.06l15-15Z"
		clip-rule="evenodd"
	/>
</svg>
