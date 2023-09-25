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
		d="M9.75 6a3.75 3.75 0 0 1 3.75-3.75H15A3.75 3.75 0 0 1 18.75 6v15a.75.75 0 0 1-1.5 0V6A2.25 2.25 0 0 0 15 3.75h-1.5A2.25 2.25 0 0 0 11.25 6v.5a.75.75 0 0 1-1.5 0V6ZM6.747 9.932a.75.75 0 0 0-1.494.136l.917 10.09a1.75 1.75 0 0 0 1.743 1.592h5.174c.905 0 1.66-.69 1.743-1.592l.917-10.09a.75.75 0 1 0-1.494-.136l-.553 6.081a3.55 3.55 0 0 0-3.468.264 2.05 2.05 0 0 1-2.367-.066L7.45 15.9l-.172-.13-.531-5.838Zm.708 7.788.21 2.303a.25.25 0 0 0 .248.227h5.174a.25.25 0 0 0 .249-.227l.219-2.407-.437-.219a2.05 2.05 0 0 0-2.054.128 3.55 3.55 0 0 1-3.61.195Zm3.575-9.25-.53-.53-.53.53a9.044 9.044 0 0 0-1.027 1.235c-.321.47-.693 1.136-.693 1.795a2.25 2.25 0 0 0 4.5 0c0-.66-.372-1.324-.693-1.795A9.04 9.04 0 0 0 11.03 8.47ZM9.75 11.5c0-.17.128-.504.432-.951.1-.148.21-.292.318-.426.108.134.217.278.318.426.304.447.432.782.432.951a.75.75 0 0 1-1.5 0Z"
		clip-rule="evenodd"
	/>
</svg>
