<script lang="ts" module>
	import newUniqueId from "$lib/components/local-unique-id";
</script>

<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		/**
		 * Title of the icon, used for accessibility
		 */
		title?: string;

		children?: Snippet;

		[key: string]: unknown;
	};

	let { title, children, ...restProps }: Props = $props();

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
	{...restProps}
>
	{#if title}
		<title {id}>{title}</title>
	{/if}
	{#if children}
		{@render children()}
	{/if}
	<path
		fill="currentColor"
		fill-rule="evenodd"
		d="M10.03 2.97c-.394-.395-.94-.375-1.278-.32-.383.065-.802.224-1.212.43-.828.413-1.768 1.087-2.57 1.89-.802.802-1.477 1.742-1.89 2.57-.206.41-.365.828-.429 1.212-.056.337-.076.883.319 1.278l11 11c.395.395.941.375 1.278.32.384-.065.802-.224 1.213-.43.828-.413 1.767-1.088 2.57-1.89.802-.802 1.476-1.742 1.89-2.57.205-.41.364-.829.428-1.212.057-.337.076-.883-.319-1.278l-11-11Zm-4 3.06c.698-.698 1.509-1.273 2.18-1.61.34-.17.61-.26.788-.29a.95.95 0 0 1 .063-.008L10.94 6 6 10.94 4.122 9.06a.958.958 0 0 1 .009-.063c.03-.18.12-.448.29-.788.336-.672.912-1.482 1.61-2.18ZM7.06 12 12 7.06 16.94 12 12 16.94 7.06 12Zm6 6 1.879 1.878a.876.876 0 0 0 .063-.009c.18-.03.448-.12.788-.29.672-.336 1.482-.912 2.18-1.61.698-.697 1.273-1.507 1.61-2.18.17-.34.26-.608.29-.787a.988.988 0 0 0 .008-.063L18 13.06 13.06 18ZM9.129 4.12h-.012a.05.05 0 0 1 .012 0ZM19.88 14.873l.002.008v.003l-.002-.011Zm-5.006 5.006.009.001h.002a.05.05 0 0 1-.011 0ZM4.12 9.127v-.01l.001.011Zm7.13.873a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM10 11.25a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5H10Zm3.25.75a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H14a.75.75 0 0 1-.75-.75Z"
		clip-rule="evenodd"
	/>
</svg>
