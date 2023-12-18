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
		d="M12 3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM9.25 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Zm3.5 4a.75.75 0 0 1 .75-.75h1.347a1.75 1.75 0 0 1 1.732 1.998l-.837 5.858a.75.75 0 0 1-.742.644h-.75V21a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75h.85l.745-5.215a.25.25 0 0 0-.248-.285H13.5a.75.75 0 0 1-.75-.75Zm-2.78.916a.25.25 0 0 1 .235-.166h.295a.75.75 0 0 0 0-1.5h-.295c-.74 0-1.4.465-1.648 1.161l-2.263 6.337A.75.75 0 0 0 7 16.75h2.75V21a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75H8.064L9.97 9.916Z"
		clip-rule="evenodd"
	/>
</svg>
