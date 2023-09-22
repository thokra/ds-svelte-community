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
		d="M3.908 12a11.345 11.345 0 0 0 1.822 1.924C7.137 15.096 9.223 16.25 12 16.25c2.777 0 4.863-1.154 6.27-2.326A11.348 11.348 0 0 0 20.092 12a11.348 11.348 0 0 0-1.822-1.924C16.863 8.904 14.777 7.75 12 7.75c-2.777 0-4.863 1.154-6.27 2.326A11.346 11.346 0 0 0 3.908 12ZM12 7.75a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5ZM21 12l.643-.386v-.001l-.002-.002-.003-.005-.01-.015a10.454 10.454 0 0 0-.606-.84c-.398-.5-.996-1.164-1.792-1.827C17.637 7.596 15.223 6.25 12 6.25c-3.223 0-5.637 1.346-7.23 2.674a12.844 12.844 0 0 0-1.793 1.826 10.447 10.447 0 0 0-.574.79 3.63 3.63 0 0 0-.032.05l-.01.016-.002.005-.001.002s-.001.001.642.387l-.643-.386a.75.75 0 0 0 0 .772L3 12l-.643.386v.001l.002.002.003.005.01.015a4.463 4.463 0 0 0 .15.23c.103.15.255.36.455.61.4.5.997 1.164 1.793 1.827C6.363 16.404 8.777 17.75 12 17.75c3.223 0 5.637-1.346 7.23-2.674a12.842 12.842 0 0 0 1.793-1.826 10.42 10.42 0 0 0 .606-.84l.01-.016.002-.005.001-.002s.001-.001-.642-.387Zm0 0 .643.386a.75.75 0 0 0 0-.772L21 12Zm-9-2.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm0 1.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
		clip-rule="evenodd"
	/>
</svg>
