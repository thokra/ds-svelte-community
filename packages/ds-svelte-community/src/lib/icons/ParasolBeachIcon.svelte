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
		d="M10.049 2.578a.75.75 0 0 0-1.45.389l.198.737a10.648 10.648 0 0 0-6.323 5.83l.687.302-.687-.301c-.16.363-.19.77-.087 1.152l.427 1.595a.75.75 0 0 0 .918.53l2.415-.647a.75.75 0 0 0 .456-.35l.332-.575.575.332a.75.75 0 0 0 .57.075l2.655-.712 1.433 5.348c-3.962.317-5.77 2.865-6.579 4.004-.071.1-.134.19-.19.265a.75.75 0 0 0 1.203.896c.063-.085.13-.18.204-.283.847-1.185 2.44-3.415 6.194-3.415 4.182 0 6.473 2.312 7.376 3.666a.75.75 0 1 0 1.248-.832c-1.041-1.562-3.535-4.064-7.906-4.314l-1.534-5.723 2.657-.712a.75.75 0 0 0 .455-.35l.332-.574.575.332a.75.75 0 0 0 .57.075l2.414-.647a.75.75 0 0 0 .53-.919l-.427-1.594a1.746 1.746 0 0 0-.651-.955 10.648 10.648 0 0 0-8.393-1.888l-.197-.737Zm7.7 3.834c-4.756-3.5-11.531-1.685-13.901 3.725a.245.245 0 0 0-.012.162l.233.87 1.39-.373.552-.955a.75.75 0 0 1 1.024-.275l.956.552 6.161-1.651.552-.956a.75.75 0 0 1 1.025-.274l.955.551 1.39-.372-.233-.87a.245.245 0 0 0-.091-.134Z"
		clip-rule="evenodd"
	/>
</svg>
