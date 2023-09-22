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
		d="M11.823 4.399c-1.503-1.503-3.805-1.652-5.666-.681a.75.75 0 0 0-.183 1.195L8.22 7.16c-.15.223-.32.453-.463.598a4.275 4.275 0 0 1-.598.463L4.913 5.974a.75.75 0 0 0-1.195.183c-.971 1.861-.823 4.163.68 5.666 1.226 1.226 2.989 1.552 4.603 1.102l6.021 6.595c.814.891 2.2 1.21 3.298.468.316-.213.656-.468.928-.74.272-.272.527-.612.74-.928.741-1.098.423-2.484-.468-3.298l-6.595-6.02c.45-1.615.124-3.377-1.102-4.603ZM9.433 6.25l-1.57-1.57c1.087-.229 2.169.048 2.9.778.866.867 1.093 2.218.598 3.498a.75.75 0 0 0 .194.824l6.954 6.35c.43.393.496.964.236 1.35a4.87 4.87 0 0 1-.558.706l.53.53-.53-.53a4.965 4.965 0 0 1-.706.558c-.386.26-.958.195-1.351-.236l-6.35-6.952a.75.75 0 0 0-.824-.194c-1.28.494-2.632.267-3.498-.6-.73-.73-1.007-1.812-.777-2.898L6.25 9.433a1.229 1.229 0 0 0 1.526.175c.278-.176.729-.477 1.041-.79.313-.312.614-.763.79-1.041a1.229 1.229 0 0 0-.175-1.526Zm7.478 9.987a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5h-.01Z"
		clip-rule="evenodd"
	/>
</svg>
