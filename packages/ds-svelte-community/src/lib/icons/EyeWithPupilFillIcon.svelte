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
		d="M21.478 11.361a7 7 0 0 1 .165.252.75.75 0 0 1 0 .773l-.046.075-.119.178c-.103.15-.255.36-.455.61-.4.5-.997 1.164-1.793 1.827-1.593 1.328-4.007 2.674-7.23 2.674-3.222 0-5.637-1.346-7.23-2.674a13 13 0 0 1-1.793-1.826 10 10 0 0 1-.606-.84.77.77 0 0 1-.014-.796l.047-.074q.041-.065.118-.179c.103-.15.255-.36.455-.61.4-.5.997-1.164 1.793-1.827C6.363 7.596 8.778 6.25 12 6.25s5.637 1.346 7.23 2.674a13 13 0 0 1 1.793 1.826c.2.25.352.46.455.611M12 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M7.75 12a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
		clip-rule="evenodd"
	/>
</svg>
