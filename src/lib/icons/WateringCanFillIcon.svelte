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
		d="M9.74 6.786c-.001-.146.005-.34.03-.566.055-.483.202-1.14.584-1.788.387-.658 1.003-1.285 1.953-1.704.94-.415 2.166-.608 3.755-.475 1.614.134 2.766.615 3.536 1.355.773.744 1.075 1.667 1.15 2.514.072.839-.074 1.636-.227 2.205a7.57 7.57 0 0 1-.212.67c.283.609.441 1.287.441 2.003v8.5c0 .69-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25v-3.229L5.323 11.56a.25.25 0 0 1 .015-.337l2.46-2.46a.25.25 0 0 1 .322-.026l1.13.807V8c0-.472.187-.9.49-1.214Zm9.439.685c.07-.38.11-.801.074-1.219-.052-.59-.25-1.135-.695-1.563-.449-.432-1.234-.826-2.62-.942-1.411-.117-2.373.065-3.026.353-.644.284-1.028.688-1.266 1.093-.212.36-.317.738-.367 1.057H16c1.223 0 2.337.462 3.179 1.22ZM6.478 6.426a1.25 1.25 0 0 0-2.044-.42L2.506 7.934a1.25 1.25 0 0 0 .42 2.044l.944.378a.25.25 0 0 0 .27-.056L6.8 7.64a.25.25 0 0 0 .056-.27l-.378-.944Z"
		clip-rule="evenodd"
	/>
</svg>
