<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
	import type { SVGAttributes } from "svelte/elements";
</script>

<script lang="ts">
	/**
	 * Title of the icon, used for accessibility
	 */
	export let title = "";

	type $$Props = SVGAttributes<SVGElement> & {
		title?: string;
	};

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
	{...$$restProps}
>
	{#if title}
		<title {id}>{title}</title>
	{/if}
	<slot />
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M12.75 2.5a.75.75 0 0 0-1.5 0v1.273c-2.222.14-3.655.92-4.499 2.186-.887 1.33-1.001 3.04-1.001 4.541v3c0 .809-.424 1.92-.92 2.915a18.092 18.092 0 0 1-.936 1.641l-.014.022-.004.006A.75.75 0 0 0 4.5 19.25h4.338a3.25 3.25 0 0 0 6.324 0H19.5a.75.75 0 0 0 .624-1.166l-.004-.006-.014-.022a15.963 15.963 0 0 1-.275-.442c-.18-.3-.42-.72-.66-1.2-.497-.994-.921-2.105-.921-2.914v-3c0-1.501-.114-3.21-1.001-4.541-.844-1.266-2.277-2.046-4.499-2.186V2.5ZM12 5.25c-2.345 0-3.436.694-4.001 1.541-.613.92-.749 2.21-.749 3.709v3c0 1.191-.576 2.58-1.08 3.585-.118.238-.236.461-.349.665H18.18a18.91 18.91 0 0 1-.35-.665c-.503-1.006-1.079-2.394-1.079-3.585v-3c0-1.499-.136-2.79-.749-3.709C15.436 5.944 14.345 5.25 12 5.25Zm-1.237 14.487a1.747 1.747 0 0 1-.344-.487h3.162a1.747 1.747 0 0 1-1.581 1 1.75 1.75 0 0 1-1.237-.513Z"
		clip-rule="evenodd"
	/>
</svg>
