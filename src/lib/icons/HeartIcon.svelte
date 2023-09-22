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
		d="M12 4.969c1.399-1.242 2.776-1.844 4.125-1.844 1.519 0 2.823.763 3.905 1.845 2.373 2.372 2.207 6.354-1 9.56l-4.375 4.375-1.531 1.532-.438.437-.116.116-.03.03-.007.008-.002.002L12 20.5l-.53.53h-.001l-.002-.002-.008-.008-.03-.03-.116-.116-.437-.437-1.531-1.532L4.97 14.53c-3.207-3.206-3.373-7.188-1-9.56 1.08-1.082 2.386-1.845 3.905-1.845 1.349 0 2.726.602 4.125 1.844ZM12 20.5l-.53.53a.75.75 0 0 0 1.06 0L12 20.5Zm0-1.06.063-.064 1.531-1.531 4.376-4.375c2.793-2.794 2.627-5.812 1-7.44-.919-.918-1.864-1.405-2.845-1.405-.981 0-2.177.487-3.595 1.905a.75.75 0 0 1-1.06 0c-1.42-1.418-2.615-1.905-3.596-1.905-.981 0-1.927.487-2.845 1.405-1.627 1.628-1.793 4.646 1 7.44l4.375 4.375 1.531 1.53.064.064Z"
		clip-rule="evenodd"
	/>
</svg>
