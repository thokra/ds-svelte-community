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
		d="M4.148 12.317A10 10 0 0 1 3.905 12q.103-.14.243-.317c.35-.438.878-1.025 1.582-1.61C7.136 8.902 9.222 7.75 12 7.75a4.25 4.25 0 0 0 0 8.5c-2.778 0-4.864-1.152-6.27-2.323a11.3 11.3 0 0 1-1.582-1.61M12 16.25a4.25 4.25 0 0 0 0-8.5c2.778 0 4.864 1.152 6.27 2.323A11.3 11.3 0 0 1 20.095 12q-.103.14-.243.317a11.3 11.3 0 0 1-1.582 1.61c-1.406 1.171-3.492 2.323-6.27 2.323m0-10c-3.222 0-5.636 1.343-7.23 2.67a13 13 0 0 0-1.793 1.826 10 10 0 0 0-.576.796l-.05.08-.011.022-.037.078c-.012.032-.045.17-.053.278.008.108.041.246.053.278l.037.078.012.022.05.08q.04.069.12.182c.103.152.254.363.455.614.4.5.997 1.163 1.793 1.826 1.594 1.327 4.008 2.67 7.23 2.67s5.636-1.343 7.23-2.67a13 13 0 0 0 1.793-1.826 10 10 0 0 0 .576-.796l.035-.056.005-.009.01-.015.011-.022.016-.03c.004-.01.015-.033.02-.048A1.3 1.3 0 0 0 21.75 12a1.4 1.4 0 0 0-.053-.278l-.021-.047-.016-.031-.02-.034-.006-.012a4 4 0 0 0-.155-.238 10 10 0 0 0-.456-.614c-.4-.5-.997-1.163-1.793-1.826-1.594-1.327-4.008-2.67-7.23-2.67M9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
		clip-rule="evenodd"
	/>
</svg>
