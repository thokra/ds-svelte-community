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
		d="M6 3.25a.75.75 0 0 0 0 1.5h.315c.109 1.966.642 3.846 1.546 5.302.502.81 1.116 1.479 1.81 1.948-.694.47-1.308 1.138-1.81 1.948-.904 1.456-1.437 3.336-1.546 5.302H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-.298c-.109-1.966-.643-3.846-1.546-5.302-.503-.81-1.116-1.479-1.81-1.948.694-.47 1.307-1.138 1.81-1.948.904-1.456 1.437-3.336 1.546-5.302H18a.75.75 0 0 0 0-1.5H6Zm6.008 8c.972 0 2.027-.624 2.873-1.989.738-1.189 1.211-2.785 1.318-4.511H7.818c.107 1.726.58 3.322 1.318 4.511.846 1.365 1.901 1.989 2.872 1.989Zm0 1.5c-.971 0-2.026.624-2.872 1.989-.738 1.189-1.211 2.784-1.318 4.511h8.381c-.107-1.727-.58-3.322-1.318-4.511-.846-1.365-1.901-1.989-2.873-1.989Z"
		clip-rule="evenodd"
	/>
</svg>
