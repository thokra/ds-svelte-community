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
		d="M16.125 3.125c-1.35 0-2.726.602-4.125 1.844-1.4-1.242-2.776-1.844-4.125-1.844-1.52 0-2.824.763-3.905 1.845-2.373 2.372-2.207 6.354 1 9.56l4.375 4.375 1.53 1.532.438.437.117.116.03.03.007.008.002.002.327-.326-.326.326a.75.75 0 0 0 1.06 0l-.3-.3.3.3.003-.002.007-.008.03-.03.116-.116.438-.437 1.531-1.532 4.375-4.375c3.207-3.206 3.373-7.188 1-9.56-1.082-1.082-2.386-1.845-3.905-1.845ZM13.37 18.069l.225-.224 4.374-4.375c2.794-2.794 2.628-5.812 1-7.44-.918-.918-1.863-1.405-2.844-1.405-.956 0-2.116.463-3.487 1.798l-1.685 4.215 3.382 1.691a.75.75 0 0 1 .388.872l-1.353 4.868ZM11.116 6.19C9.85 5.033 8.773 4.625 7.875 4.625c-.981 0-1.927.487-2.845 1.405-1.627 1.628-1.793 4.646 1 7.44l4.375 4.375 1.151 1.15 1.556-5.6-3.447-1.724a.75.75 0 0 1-.361-.95l1.812-4.53Z"
		clip-rule="evenodd"
	/>
</svg>
