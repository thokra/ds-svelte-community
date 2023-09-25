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
		d="M8.25 7.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5ZM8.288 17.288A5.25 5.25 0 0 1 12 15.75a.75.75 0 0 0 0-1.5A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 1.5 0 5.25 5.25 0 0 1 1.538-3.712Zm9.242.682L19 19.44l.94-.94L17 15.56l-.94.94 1.47 1.47ZM17 19.56l1.47 1.47a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 0 1.06l1.47 1.47-2.47 2.47a.75.75 0 1 0 1.06 1.06L17 19.56Z"
		clip-rule="evenodd"
	/>
</svg>
