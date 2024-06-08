<script lang="ts">
	import type { Snippet } from "svelte";
	import { omit } from "../helpers";

	let {
		href,
		children,
		...restProps
	}: {
		/**
		 * Link to the element that has the error
		 */
		href: string;
		/**
		 * The error message
		 */
		children: Snippet;
		[key: string]: unknown;
	} = $props();
</script>

<li>
	<a {...omit(restProps, "class")} class={"navds-error-summary__item navds-link"} {href}>
		{@render children()}
	</a>
</li>
