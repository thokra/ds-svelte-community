<script lang="ts" context="module">
	import newUniqueId from "locally-unique-id-generator";
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
		d="M12.445 6.616a1.25 1.25 0 0 1 .883-.366H17.5a.25.25 0 0 1 .25.25v4.172c0 .331-.132.649-.366.883l-8.207 8.208a.25.25 0 0 1-.354 0l-4.586-4.586a.25.25 0 0 1 0-.354l8.208-8.207Zm.883-1.866c-.729 0-1.428.29-1.944.805l-8.207 8.208a1.75 1.75 0 0 0 0 2.474l4.586 4.586a1.75 1.75 0 0 0 2.474 0l8.208-8.207a2.75 2.75 0 0 0 .805-1.944V6.5a1.75 1.75 0 0 0-1.75-1.75h-4.172ZM14.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
		clip-rule="evenodd"
	/>
</svg>
