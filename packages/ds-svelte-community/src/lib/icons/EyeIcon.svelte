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
		d="M4.148 12.313a9.595 9.595 0 0 1-.24-.313 11.346 11.346 0 0 1 1.822-1.924C7.137 8.904 9.223 7.75 12 7.75a4.25 4.25 0 0 0 0 8.5c-2.777 0-4.863-1.154-6.27-2.326a11.345 11.345 0 0 1-1.582-1.611ZM12 16.25a4.25 4.25 0 0 0 0-8.5c2.777 0 4.863 1.154 6.27 2.326A11.348 11.348 0 0 1 20.092 12a11.348 11.348 0 0 1-1.822 1.924c-1.407 1.172-3.493 2.326-6.27 2.326Zm9.643-4.636L21 12l.643.386v.001l-.002.002-.003.005-.01.015-.032.051a10.42 10.42 0 0 1-.573.79c-.4.5-.997 1.163-1.793 1.826-1.593 1.328-4.007 2.674-7.23 2.674-3.223 0-5.637-1.346-7.23-2.674a12.845 12.845 0 0 1-1.793-1.826 10.417 10.417 0 0 1-.606-.84l-.01-.016-.002-.005-.001-.002S2.356 12.386 3 12l-.643-.386v-.001l.002-.002.003-.005.01-.015a10.447 10.447 0 0 1 .606-.84c.398-.5.996-1.164 1.792-1.827C6.363 7.596 8.777 6.25 12 6.25c3.223 0 5.637 1.346 7.23 2.674a12.842 12.842 0 0 1 1.793 1.826 10.454 10.454 0 0 1 .573.79l.033.05.01.016.002.005.001.002ZM21 12l.643-.386a.75.75 0 0 1 0 .772L21 12Zm-18.643-.386L3 12l-.643.386a.75.75 0 0 1 0-.772ZM9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z"
		clip-rule="evenodd"
	/>
</svg>
