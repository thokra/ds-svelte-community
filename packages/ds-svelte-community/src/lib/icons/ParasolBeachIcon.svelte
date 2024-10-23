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
		d="M10.049 2.578a.75.75 0 0 0-1.45.389l.198.737a10.65 10.65 0 0 0-6.323 5.83c-.16.364-.19.77-.087 1.153l.427 1.595a.75.75 0 0 0 .918.53l2.415-.647a.75.75 0 0 0 .456-.35l.332-.575.575.332a.75.75 0 0 0 .57.075l2.655-.712 1.433 5.348c-3.962.317-5.77 2.865-6.579 4.004q-.106.151-.19.265a.75.75 0 0 0 1.203.896q.094-.128.204-.283C7.653 19.98 9.246 17.75 13 17.75c4.182 0 6.473 2.312 7.376 3.666a.75.75 0 1 0 1.248-.832c-1.041-1.562-3.535-4.064-7.906-4.314l-1.534-5.723 2.657-.712a.75.75 0 0 0 .455-.35l.332-.574.575.332a.75.75 0 0 0 .57.075l2.414-.647a.75.75 0 0 0 .53-.919l-.427-1.594a1.75 1.75 0 0 0-.651-.955 10.65 10.65 0 0 0-8.393-1.888zm7.7 3.834c-4.756-3.5-11.531-1.685-13.901 3.725a.25.25 0 0 0-.012.162l.233.87 1.39-.373.552-.955a.75.75 0 0 1 1.024-.275l.956.552 6.161-1.651.552-.956a.75.75 0 0 1 1.025-.274l.955.551 1.39-.372-.233-.87a.25.25 0 0 0-.091-.134"
		clip-rule="evenodd"
	/>
</svg>
