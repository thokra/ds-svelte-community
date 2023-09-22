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
		d="M9.75 10V6.012c0-.004 0-.01.002-.018a1.178 1.178 0 0 1 .223-.544c.204-.272.708-.7 2.025-.7s1.82.428 2.025.7a1.179 1.179 0 0 1 .225.562V10a.75.75 0 0 0 1.5 0V7.049A5.253 5.253 0 0 1 19.25 12v5a.75.75 0 0 0 .079.335l.457.915H4.213l.458-.915A.75.75 0 0 0 4.75 17v-5a5.253 5.253 0 0 1 3.5-4.952V10a.75.75 0 0 0 1.5 0ZM8.332 5.458A6.752 6.752 0 0 0 3.25 12v4.823l-.56 1.118a1.25 1.25 0 0 0 1.12 1.809h16.38a1.25 1.25 0 0 0 1.118-1.809l-.56-1.118V12a6.752 6.752 0 0 0-5.08-6.542 2.682 2.682 0 0 0-.444-.908c-.546-.728-1.542-1.3-3.225-1.3s-2.68.572-3.225 1.3a2.68 2.68 0 0 0-.443.908ZM9.25 14a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
