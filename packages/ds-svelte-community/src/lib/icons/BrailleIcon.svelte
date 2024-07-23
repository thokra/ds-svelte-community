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
		d="M5.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm7.851 4.75a.506.506 0 0 0-.498.513V16a.75.75 0 0 1-1.287.524l-1.139-1.168a.388.388 0 0 0-.557-.002.422.422 0 0 0-.05.526l2.22 3.37h5.458l.699-2.358a1.251 1.251 0 0 0-.935-1.588l-2.811-.569a.75.75 0 0 1-.602-.735v-2.737a.506.506 0 0 0-.498-.513Zm-1.998.513c0-1.103.886-2.013 1.998-2.013s1.998.91 1.998 2.013v2.124l2.21.447c1.582.32 2.533 1.941 2.076 3.484l-.858 2.895a.75.75 0 0 1-.72.537h-6.422a.75.75 0 0 1-.626-.337l-2.443-3.708a1.922 1.922 0 0 1 .237-2.405 1.888 1.888 0 0 1 2.55-.128v-2.909ZM7 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM17 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
		clip-rule="evenodd"
	/>
</svg>
