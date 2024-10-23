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
		d="M9.75 6a3.75 3.75 0 0 1 3.75-3.75H15A3.75 3.75 0 0 1 18.75 6v15a.75.75 0 0 1-1.5 0V6A2.25 2.25 0 0 0 15 3.75h-1.5A2.25 2.25 0 0 0 11.25 6v.5a.75.75 0 0 1-1.5 0zm.75 1.94.53.53a9 9 0 0 1 1.027 1.235c.321.47.693 1.136.693 1.795a2.25 2.25 0 0 1-4.5 0c0-.66.372-1.324.693-1.795A9 9 0 0 1 9.97 8.47zm-.318 2.609c-.304.447-.432.782-.432.951a.75.75 0 0 0 1.5 0c0-.169-.128-.504-.432-.951a7 7 0 0 0-.318-.426 7 7 0 0 0-.318.426m-4.25-1.296a.75.75 0 0 1 .815.68l.53 5.838.588.44a2.05 2.05 0 0 0 2.367.066 3.55 3.55 0 0 1 3.468-.264l.553-6.08a.75.75 0 1 1 1.494.135l-.917 10.09a1.75 1.75 0 0 1-1.743 1.592H7.913a1.75 1.75 0 0 1-1.743-1.592l-.917-10.09a.75.75 0 0 1 .68-.815m1.732 10.77-.21-2.303a3.55 3.55 0 0 0 3.61-.195 2.05 2.05 0 0 1 2.054-.128l.437.219-.22 2.407a.25.25 0 0 1-.248.227H7.913a.25.25 0 0 1-.249-.227"
		clip-rule="evenodd"
	/>
</svg>
