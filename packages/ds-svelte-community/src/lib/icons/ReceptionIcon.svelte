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
		d="M16.5 5.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM13.75 7a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM9 6.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM6.25 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Zm7.772 3.491A3 3 0 0 1 16.5 10.25a3 3 0 0 1 2.478 1.241c.53.716.772 1.632.772 2.509v1.25H21a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-2.25h-8V19a.75.75 0 0 1-1.5 0v-4c0-.623-.175-1.207-.478-1.616-.286-.387-.695-.634-1.272-.634-.577 0-.986.247-1.272.634-.303.409-.478.993-.478 1.616v4a.75.75 0 0 1-1.5 0v-2.25h-2V19a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75h2.75V15c0-.877.242-1.793.772-2.509A3 3 0 0 1 9 11.25a3 3 0 0 1 2.478 1.241c.53.716.772 1.632.772 2.509v.25h1V14c0-.877.242-1.793.772-2.509ZM14.75 14c0-.623.175-1.207.478-1.616.286-.387.695-.634 1.272-.634.577 0 .986.247 1.272.634.303.409.478.993.478 1.616v1.25h-3.5V14Z"
		clip-rule="evenodd"
	/>
</svg>
