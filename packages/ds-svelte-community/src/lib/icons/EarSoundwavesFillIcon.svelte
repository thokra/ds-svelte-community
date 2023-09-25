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
		d="M15.678 2.269c-3.272-.504-6.272 1.535-7.16 4.531-.384 1.294.019 2.607.328 3.611.224.725.406 1.517.406 2.121 0 .604-.182 1.396-.406 2.121l-.018.06c-.303.98-.715 2.316-.235 3.59a5.328 5.328 0 0 0 10.095-.376l2.196-7.467c1.101-3.743-1.349-7.598-5.204-8.191Zm-.362 3.607a3.417 3.417 0 0 0-4.065 3.355v1.77c0 .413.336.75.75.75a1.25 1.25 0 0 1 0 2.5.75.75 0 0 0 0 1.5 2.75 2.75 0 0 0 .75-5.397V9.23a1.917 1.917 0 1 1 3.767.506l-.291 1.065a.75.75 0 0 0 1.447.396l.291-1.065a3.417 3.417 0 0 0-2.649-4.257Zm-11.574.16a.75.75 0 0 1 1.053-.125A7.738 7.738 0 0 1 7.75 12a7.738 7.738 0 0 1-2.955 6.089.75.75 0 0 1-.929-1.178A6.238 6.238 0 0 0 6.25 12c0-1.992-.93-3.765-2.384-4.911a.75.75 0 0 1-.124-1.053Zm-.18 2.822a.75.75 0 1 0-1.124.993c.506.573.812 1.324.812 2.15 0 .824-.306 1.575-.812 2.149a.75.75 0 0 0 1.124.992A4.735 4.735 0 0 0 4.75 12a4.735 4.735 0 0 0-1.188-3.142Z"
		clip-rule="evenodd"
	/>
</svg>
