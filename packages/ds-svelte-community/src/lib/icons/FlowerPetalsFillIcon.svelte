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
		d="M16.227 11.25q-.154 0-.303-.012.141.186.266.4c.476.825.705 1.577.61 2.253-.1.724-.544 1.2-1.047 1.49s-1.137.438-1.814.163c-.633-.257-1.17-.83-1.646-1.655q-.15-.263-.25-.524-.09.21-.21.42c-.476.825-1.013 1.398-1.646 1.655-.677.275-1.31.128-1.814-.162-.503-.29-.947-.767-1.048-1.49a2.7 2.7 0 0 1 .108-1.126q-.066.067-.126.135c-.379.427-.557.828-.557 1.203v6.5a.75.75 0 1 1-1.5 0V14c0-.875.418-1.616.935-2.198a6 6 0 0 1 .645-.622c-.525-.087-.966-.257-1.313-.528C4.94 10.203 4.75 9.581 4.75 9c0-.58.19-1.203.767-1.652.538-.42 1.304-.598 2.256-.598a4 4 0 0 1 .357.017 4 4 0 0 1-.194-.302c-.476-.825-.705-1.576-.61-2.253.1-.724.544-1.2 1.047-1.49s1.137-.437 1.815-.162c.632.257 1.17.83 1.645 1.655q.094.162.167.324.075-.162.167-.324c.476-.825 1.013-1.398 1.646-1.655.677-.275 1.31-.128 1.814.162.503.29.947.766 1.048 1.49.094.677-.135 1.428-.61 2.253a4 4 0 0 1-.195.302q.174-.017.357-.017c.952 0 1.718.178 2.256.598.577.449.767 1.071.767 1.652 0 .58-.19 1.203-.767 1.652-.538.42-1.304.598-2.256.598M10.25 9a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m1 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0"
		clip-rule="evenodd"
	/>
</svg>
