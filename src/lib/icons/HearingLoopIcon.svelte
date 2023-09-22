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
		d="M3.302 8.64c0-3.95 3.522-6.972 7.427-6.371a6.414 6.414 0 0 1 4.028 2.312.75.75 0 1 1-1.166.943 4.914 4.914 0 0 0-3.09-1.773 4.947 4.947 0 0 0-5.7 4.89.75.75 0 0 1-1.5 0Zm7.065-2.764a3.417 3.417 0 0 0-4.065 3.356V11c0 .415.336.75.75.75.212 0 .41.052.582.144a.75.75 0 0 0 .701-1.326 2.734 2.734 0 0 0-.533-.214V9.232a1.917 1.917 0 0 1 3.362-1.261.75.75 0 1 0 1.131-.985 3.403 3.403 0 0 0-1.928-1.11Zm5.222 5.756a.75.75 0 1 0-1.44-.423l-1.85 6.295a3.826 3.826 0 0 1-5.808 2.095.75.75 0 1 0-.839 1.243 5.326 5.326 0 0 0 8.085-2.915l1.852-6.295ZM18.28 5.53a.75.75 0 0 0-1.06-1.06l-15 15a.75.75 0 0 0 1.06 1.06l15-15Zm.47 11.22H20a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5h1.25V21a.75.75 0 0 0 1.5 0v-4.25Z"
		clip-rule="evenodd"
	/>
</svg>
