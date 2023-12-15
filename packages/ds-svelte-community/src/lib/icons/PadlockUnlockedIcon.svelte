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
		d="M9.04 4.558a4.75 4.75 0 0 1 8.248 4.716A1.75 1.75 0 0 1 18.75 11v9a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-9c0-.966.784-1.75 1.75-1.75h8.57l.399-.692a3.25 3.25 0 0 0-5.63-3.25l-.69 1.195a.75.75 0 1 1-1.299-.75l.69-1.195Zm7.036 6.192a.748.748 0 0 1-.153 0H7a.25.25 0 0 0-.25.25v8.25h10.5V11a.25.25 0 0 0-.25-.25h-.924ZM10.5 14.5a1.5 1.5 0 1 1 2.25 1.3V17a.75.75 0 0 1-1.5 0v-1.2a1.5 1.5 0 0 1-.75-1.3Z"
		clip-rule="evenodd"
	/>
</svg>
