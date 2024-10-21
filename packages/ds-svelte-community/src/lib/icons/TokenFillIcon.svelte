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
		d="M12.375 2.35a.75.75 0 0 0-.75 0l-7.07 4.082a.234.234 0 0 0 .007.408.719.719 0 0 1 .018.01l4.436 2.561a.26.26 0 0 0 .316-.047A3.739 3.739 0 0 1 12 8.25c1.043 0 1.988.426 2.667 1.114a.262.262 0 0 0 .316.047l4.252-2.454.017-.01.167-.09a.25.25 0 0 0 .005-.436l-7.05-4.07Zm8.169 6.023a.25.25 0 0 0-.369-.22l-.2.108-4.24 2.449a.262.262 0 0 0-.118.297 3.755 3.755 0 0 1-2.668 4.622.262.262 0 0 0-.2.25V21a.25.25 0 0 0 .376.216l7.044-4.067a.75.75 0 0 0 .375-.649V8.373Zm-9.67 12.844A.25.25 0 0 0 11.25 21v-5.12a.262.262 0 0 0-.2-.251 3.751 3.751 0 0 1-2.667-4.622.262.262 0 0 0-.118-.297L3.84 8.155l-.016-.008a.25.25 0 0 0-.368.22V16.5a.75.75 0 0 0 .375.65l7.044 4.067Zm3.062-10.364a2.249 2.249 0 0 0-3.877.009l-.008.013-.008.014a2.25 2.25 0 1 0 3.919.008l-.014-.022a.928.928 0 0 1-.012-.022Z"
		clip-rule="evenodd"
	/>
</svg>
