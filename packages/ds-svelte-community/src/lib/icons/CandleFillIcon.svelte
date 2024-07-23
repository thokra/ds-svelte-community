<script lang="ts" context="module">
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
		d="M12.564 2.002A.75.75 0 0 0 11.444 2L10.04 3.572A2.744 2.744 0 0 0 9.25 5.5a2.75 2.75 0 1 0 4.711-1.928l-1.396-1.57ZM3.25 11c0-.966.784-1.75 1.75-1.75h14c.966 0 1.75.784 1.75 1.75v4a4.406 4.406 0 0 1-.057.592c-.055.33-.167.782-.397 1.243a3.56 3.56 0 0 1-.546.804 3.225 3.225 0 0 1-.6.516c-.558.373-1.269.595-2.15.595-.8 0-1.46-.184-1.992-.495a.5.5 0 0 0-.695.198 2.339 2.339 0 0 1-.857.927c-.41.25-.9.37-1.456.37-.573 0-1.075-.126-1.492-.389a2.363 2.363 0 0 1-.88-1.023C9.28 17.593 9.25 16.686 9.25 16a.5.5 0 0 0-1 0c0 .679.02 1.793.471 2.76.247.53.642 1.061 1.254 1.447.609.384 1.305.543 2.025.543.7 0 1.378-.152 1.976-.515.406-.247.72-.559.962-.895.605.268 1.295.41 2.062.41 1.056 0 1.965-.269 2.705-.763l.045-.03V20A1.75 1.75 0 0 1 18 21.75H6A1.75 1.75 0 0 1 4.25 20v-4.639A3.9 3.9 0 0 0 6 15.75c.806 0 1.527-.207 2.127-.606.59-.393.96-.904 1.188-1.361a4.207 4.207 0 0 0 .435-1.764.5.5 0 0 0-1-.037 3.206 3.206 0 0 1-.33 1.354c-.168.338-.434.7-.848.976-.417.278-.94.438-1.572.438-.631 0-1.154-.16-1.572-.438a2.504 2.504 0 0 1-.849-.977l-.006-.011a3.212 3.212 0 0 1-.323-1.322V11Z"
		clip-rule="evenodd"
	/>
</svg>
