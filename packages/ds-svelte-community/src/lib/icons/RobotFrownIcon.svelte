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
		d="M19 4.25h-5.475a1.229 1.229 0 0 0-.026-.041c-.281-.422-.78-.709-1.499-.709-.719 0-1.218.287-1.499.709l-.026.041H5a.75.75 0 0 0-.75.75v14c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75Zm-13.25 14V5.75h12.5v12.5H5.75Zm4-9.125a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm1.461 6.112a.75.75 0 0 1-.948.474c-1.854-.617-3.66-.621-5.526 0a.75.75 0 0 1-.474-1.422c2.174-.725 4.313-.72 6.474 0a.75.75 0 0 1 .474.948Z"
		clip-rule="evenodd"
	/>
</svg>
