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
		d="M12 1.75a6.75 6.75 0 0 0-.75 13.459V21.5a.75.75 0 0 0 1.5 0v-6.291A6.751 6.751 0 0 0 12 1.75Zm-8.5 12.5V15v-.75h.03l.062.002a8.124 8.124 0 0 1 .968.102 8.122 8.122 0 0 1 2.275.725c.84.42 1.701 1.06 2.352 2.036.653.98 1.063 2.254 1.063 3.885a.75.75 0 0 1-.75.75V21v.75h-.03l-.062-.002a8.124 8.124 0 0 1-.968-.102 8.122 8.122 0 0 1-2.275-.725c-.84-.42-1.701-1.06-2.352-2.036C3.16 17.905 2.75 16.63 2.75 15a.75.75 0 0 1 .75-.75Zm11 6.75v.75h.03l.062-.002a8.125 8.125 0 0 0 .968-.102 8.121 8.121 0 0 0 2.275-.725c.84-.42 1.701-1.06 2.351-2.036.654-.98 1.064-2.254 1.064-3.885a.75.75 0 0 0-.75-.75V15v-.75h-.03l-.062.002a8.125 8.125 0 0 0-.968.102 8.121 8.121 0 0 0-2.275.725c-.84.42-1.701 1.06-2.351 2.036-.654.98-1.064 2.254-1.064 3.885 0 .414.336.75.75.75V21Z"
		clip-rule="evenodd"
	/>
</svg>
