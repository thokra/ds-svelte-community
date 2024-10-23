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
		d="M9.354 4.25a2.751 2.751 0 0 1 5.293 0H17a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75h-4.25V21a.75.75 0 0 1-1.5 0v-1.25H7a.75.75 0 0 1-.75-.75V5A.75.75 0 0 1 7 4.25zm1.646 0a1.248 1.248 0 0 1 2 0zm5.25 1.5v12.5h-8.5V5.75zm-4.25 3 .646-.38a.75.75 0 0 0-1.292 0l-.007.01-.018.03-.065.114a36 36 0 0 0-.933 1.723 19 19 0 0 0-.716 1.558c-.186.47-.365 1.01-.365 1.445a2.75 2.75 0 1 0 5.5 0c0-.435-.18-.976-.365-1.445-.2-.504-.461-1.055-.716-1.558a37 37 0 0 0-.933-1.723l-.066-.113-.017-.03-.006-.01s0-.002-.647.379m0 0-.646-.38zm-.331 2.175q.17-.335.331-.635.162.3.331.635c.245.484.484.989.66 1.432.188.478.259.776.259.893a1.25 1.25 0 1 1-2.5 0c0-.117.07-.415.26-.893.175-.443.414-.948.659-1.432"
		clip-rule="evenodd"
	/>
</svg>
