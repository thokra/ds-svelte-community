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
		d="M6.75 4.75v14.5h10.5V8.75H14.5c-.69 0-1.25-.56-1.25-1.25V4.75h-6.5Zm8 1.06 1.44 1.44h-1.44V5.81ZM5.25 4.5c0-.69.56-1.25 1.25-1.25H14a.75.75 0 0 1 .53.22l4 4c.141.14.22.331.22.53v11.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15Zm4.716 6.526a2.027 2.027 0 0 1 3.488-1.405.75.75 0 0 1-1.08 1.041.526.526 0 1 0-.583.85l1.911.786a1.833 1.833 0 0 1 .238 3.272 2.027 2.027 0 1 1-3.906 1.09.75.75 0 0 1 1.45-.385.527.527 0 1 0 .713-.62l-1.911-.786a1.833 1.833 0 0 1-.238-3.272 2.022 2.022 0 0 1-.082-.571Zm.89 2.456 1.791.737a.64.64 0 0 1 .027.01l.218.078a.333.333 0 0 0 .24-.622l-1.792-.737a.928.928 0 0 1-.026-.009l-.218-.078a.333.333 0 0 0-.24.621Z"
		clip-rule="evenodd"
	/>
</svg>
