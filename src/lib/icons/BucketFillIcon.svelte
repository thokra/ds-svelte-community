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
		d="m18.742 19.61 2-13.5.008-.11c0-.705-.553-1.162-.997-1.424-.494-.292-1.159-.529-1.914-.718-1.523-.38-3.587-.608-5.839-.608-2.252 0-4.316.227-5.839.608-.755.19-1.42.426-1.914.718-.444.262-.997.719-.997 1.424l.008.11 2 13.5c.04.264.216.488.464.587l.04.015.096.036a16.061 16.061 0 0 0 1.658.482c1.105.26 2.664.52 4.484.52 1.82 0 3.379-.26 4.484-.52.554-.13.995-.26 1.302-.36a10.9 10.9 0 0 0 .453-.158l.04-.016a.75.75 0 0 0 .463-.586ZM12 7.25c-2.166 0-4.102-.22-5.475-.563a8.35 8.35 0 0 1-.985-.305 3.912 3.912 0 0 1-.471-.219c-.137-.075-.137-.25 0-.326.126-.07.287-.148.471-.22a8.35 8.35 0 0 1 .985-.304C7.898 4.97 9.834 4.75 12 4.75c2.166 0 4.102.22 5.475.563.37.093.686.191.95.291.199.076.372.159.506.233.137.075.137.25 0 .326a4.031 4.031 0 0 1-.506.233c-.264.1-.58.198-.95.29-1.373.344-3.309.564-5.475.564Z"
		clip-rule="evenodd"
	/>
</svg>
