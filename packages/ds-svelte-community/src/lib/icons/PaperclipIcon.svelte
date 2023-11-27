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
		d="M15.911 4.382c-.545.032-1.085.292-1.502.71l-8.132 8.131c-1.2 1.201-1.754 3.549 0 5.304 1.755 1.754 4.103 1.2 5.304 0l7.424-7.425a.75.75 0 1 1 1.06 1.06l-7.424 7.425c-1.627 1.628-4.936 2.488-7.424 0-2.488-2.488-1.628-5.797 0-7.424l8.131-8.132c.644-.643 1.518-1.09 2.475-1.147.976-.057 1.978.296 2.829 1.147.85.85 1.203 1.853 1.146 2.828-.056.957-.503 1.832-1.146 2.475l-7.425 7.425c-.316.316-.838.553-1.376.613-.568.063-1.255-.062-1.806-.613-.55-.55-.676-1.238-.613-1.807.06-.537.297-1.059.613-1.375l6.717-6.718a.75.75 0 0 1 1.061 1.061l-6.717 6.717a.95.95 0 0 0-.183.481c-.025.227.026.424.183.58.156.157.352.208.58.183a.95.95 0 0 0 .48-.183l7.425-7.424c.417-.418.678-.957.71-1.503.03-.527-.147-1.116-.71-1.68-.563-.563-1.153-.74-1.68-.71Z"
		clip-rule="evenodd"
	/>
</svg>
