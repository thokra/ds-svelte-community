<script lang="ts" context="module">
	import newUniqueId from "$lib/components/local-unique-id";
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
		d="M8.826 4.484a2.788 2.788 0 0 0-2.991 3.649l1.078 3.234c.16.479.428.913.785 1.27l.333.333a.75.75 0 0 1 .217.476l.405 5.666a.687.687 0 0 0 1.357.095l1.257-5.864a.75.75 0 0 1 1.467 0l1.256 5.864a.687.687 0 0 0 1.358-.095l.404-5.665a.75.75 0 0 1 .218-.477l.332-.333c.357-.357.626-.791.785-1.27l1.078-3.234a2.788 2.788 0 0 0-2.99-3.649l-1.062.133a5.25 5.25 0 0 0-1.697.513l-.08.04a.75.75 0 0 1-.671 0l-.08-.04a5.25 5.25 0 0 0-1.698-.513l-1.06-.133Zm-3.64.022a4.288 4.288 0 0 1 3.826-1.51l1.061.132a6.75 6.75 0 0 1 1.927.54 6.75 6.75 0 0 1 1.927-.54l1.061-.132a4.288 4.288 0 0 1 4.6 5.611l-1.078 3.234a4.75 4.75 0 0 1-1.147 1.857l-.135.134-.384 5.387a2.187 2.187 0 0 1-4.32.302L12 17.079l-.523 2.442a2.187 2.187 0 0 1-4.32-.302l-.385-5.387-.134-.134A4.75 4.75 0 0 1 5.49 11.84L4.412 8.607a4.288 4.288 0 0 1 .774-4.101Z"
		clip-rule="evenodd"
	/>
</svg>
