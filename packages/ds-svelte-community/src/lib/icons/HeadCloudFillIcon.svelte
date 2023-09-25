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
		d="M11.838 2.816c.16-.185.023-.496-.218-.458a8.752 8.752 0 0 0-7.369 8.494.255.255 0 0 1-.01.07l-1.46 4.862a.75.75 0 0 0 .719.966H5a.25.25 0 0 1 .25.25v1A2.75 2.75 0 0 0 8 20.75h2a.25.25 0 0 1 .25.25v.5c0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75v-4.842c0-.058.02-.114.057-.16a8.777 8.777 0 0 0 1.731-7.421c-.05-.223-.359-.254-.489-.065a3.996 3.996 0 0 1-3.299 1.738h-5.5a3.5 3.5 0 0 1-1.221-6.781.269.269 0 0 0 .15-.137c.174-.37.396-.71.66-1.016Zm3.412-.066a3 3 0 0 0-2.959 2.5h-.041a2 2 0 1 0 0 4h5.5a2.5 2.5 0 0 0 .1-4.998 2.998 2.998 0 0 0-2.6-1.502Z"
		clip-rule="evenodd"
	/>
</svg>
