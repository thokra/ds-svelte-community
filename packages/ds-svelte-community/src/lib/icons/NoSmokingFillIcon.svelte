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
		d="M18.25 2.5a.75.75 0 0 0-1.5 0v.882c0 .97.548 1.855 1.415 2.289.358.18.585.546.585.947V7.5a.75.75 0 0 0 1.5 0v-.882a2.56 2.56 0 0 0-1.415-2.289 1.059 1.059 0 0 1-.585-.947V2.5ZM6.47 6.47a.75.75 0 0 1 1.06 0L12 10.94l4.47-4.47a.75.75 0 1 1 1.06 1.06L13.06 12l4.47 4.47a.75.75 0 1 1-1.06 1.06L12 13.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L10.94 12 6.47 7.53a.75.75 0 0 1 0-1.06Zm.378 2.853a.25.25 0 0 0-.176-.073H3a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h3.672a.25.25 0 0 0 .176-.073l2.5-2.5a.25.25 0 0 0 0-.354l-2.5-2.5Zm10.164 5.214c.086.086.238.084.238-.037v-5c0-.12-.152-.123-.238-.037l-2.36 2.36a.25.25 0 0 0 0 .354l2.36 2.36Zm1.738-.037c0 .138.112.25.25.25h1A1.75 1.75 0 0 0 21.75 13v-2A1.75 1.75 0 0 0 20 9.25h-1a.25.25 0 0 0-.25.25v5Z"
		clip-rule="evenodd"
	/>
</svg>
