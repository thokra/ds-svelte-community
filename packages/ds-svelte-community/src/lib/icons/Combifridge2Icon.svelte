<script lang="ts" context="module">
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
		d="M6 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75H6Zm2 7.5a.75.75 0 0 1 .75.75v.75h8.5v-7.5H6.75v6H8Zm0 4.5a.75.75 0 0 0 .75-.75v-.75h8.5v7.5H6.75v-6H8Zm-1.25-1.5v-1.5h.5v1.5h-.5ZM13 4.44l.53.53a9.04 9.04 0 0 1 1.027 1.235c.321.47.693 1.136.693 1.795a2.25 2.25 0 0 1-4.5 0c0-.66.372-1.324.693-1.795A9.04 9.04 0 0 1 12.47 4.97l.53-.53Zm-.318 2.609c-.304.447-.432.782-.432.951a.75.75 0 0 0 1.5 0c0-.17-.128-.504-.432-.951-.1-.148-.21-.292-.318-.426a6.594 6.594 0 0 0-.318.426ZM13 13.75a.75.75 0 0 1 .75.75v.701l.607-.35a.75.75 0 0 1 .75 1.298l-.607.351.607.35a.75.75 0 0 1-.75 1.3l-.607-.351v.701a.75.75 0 0 1-1.5 0v-.7l-.607.35a.75.75 0 0 1-.75-1.3l.607-.35-.607-.35a.75.75 0 1 1 .75-1.3l.607.35v-.7a.75.75 0 0 1 .75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
