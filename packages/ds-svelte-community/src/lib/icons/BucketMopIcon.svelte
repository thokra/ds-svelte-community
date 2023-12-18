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
		d="M17.75 4a.75.75 0 0 0-1.5 0v12.25H14a.75.75 0 0 0-.369 1.403l-.827 2.069a.75.75 0 0 0 .696 1.028h7a.75.75 0 0 0 .696-1.029l-.827-2.068A.75.75 0 0 0 20 16.25h-2.25V4Zm-2.554 13.779a.754.754 0 0 0 .011-.029h3.586l.01.029.59 1.471h-4.785l.588-1.471Zm-3.543-4.082a.748.748 0 0 0-.03-.48c-.143-.35-.423-.595-.683-.76a3.881 3.881 0 0 0-.941-.415c-.695-.213-1.568-.333-2.499-.333-.93 0-1.804.12-2.498.333a3.88 3.88 0 0 0-.942.415c-.26.165-.54.41-.683.76a.747.747 0 0 0-.03.478c0 .03.003.061.008.092l.902 6.32a.763.763 0 0 0 .528.612l.055.017a14.936 14.936 0 0 0 .855.241c.51.128 1.21.273 1.805.273s1.294-.145 1.805-.272a14.936 14.936 0 0 0 .855-.242l.055-.017.015-.005.004-.002h.002a.75.75 0 0 0 .506-.606l.903-6.319a.776.776 0 0 0 .008-.09Zm-5.961-.104a4.442 4.442 0 0 1-.327-.093l.076-.024c.524-.16 1.245-.267 2.06-.267.813 0 1.534.106 2.058.267l.076.024a4.393 4.393 0 0 1-.327.093 7.738 7.738 0 0 1-1.808.198 7.738 7.738 0 0 1-1.808-.198Zm-.653 1.377.636 4.45c.113.032.243.067.383.102.49.123 1.041.228 1.442.228.4 0 .951-.105 1.442-.228.14-.035.27-.07.383-.102l.636-4.45a6.222 6.222 0 0 1-.294.08 9.23 9.23 0 0 1-2.167.241 9.229 9.229 0 0 1-2.167-.241 6.22 6.22 0 0 1-.294-.08Z"
		clip-rule="evenodd"
	/>
</svg>
