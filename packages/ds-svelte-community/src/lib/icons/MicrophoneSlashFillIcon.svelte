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
		d="M8.51 5.126a.24.24 0 0 0 .056.258l6.755 6.755c.136.136.367.072.393-.12.024-.17.036-.343.036-.519v-5a3.75 3.75 0 0 0-7.24-1.374ZM8.25 11.5c0-.025.03-.038.048-.02l3.722 3.722a.028.028 0 0 1-.02.048 3.75 3.75 0 0 1-3.75-3.75Zm4.163 4.23a.259.259 0 0 1 .208.073l.876.876c.132.132.078.356-.103.4-.17.043-.342.078-.517.105a.258.258 0 0 0-.222.252V19.5c0 .138.112.25.25.25h1a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1a.25.25 0 0 0 .25-.25v-2.096a.258.258 0 0 0-.213-.251A5.752 5.752 0 0 1 6.25 11.5v-1a.75.75 0 0 1 1.5 0v1a4.25 4.25 0 0 0 4.663 4.23Zm4.91-2.053a.239.239 0 0 1-.392.073l-.79-.791a.26.26 0 0 1-.063-.257c.112-.381.172-.785.172-1.202v-1a.75.75 0 0 1 1.5 0v1c0 .77-.151 1.505-.426 2.177ZM6.53 5.47a.75.75 0 0 0-1.06 1.06l12 12a.75.75 0 1 0 1.06-1.06l-12-12Z"
		clip-rule="evenodd"
	/>
</svg>
