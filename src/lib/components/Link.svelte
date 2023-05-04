<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements";
	import { classes, omit } from "./helpers";

	export let href: string;

	interface $$Props extends HTMLAnchorAttributes {
		href: string;
	}
</script>

<a {...omit($$restProps, "class")} {href} class={classes($$restProps, "navds-link")}>
	<slot />
</a>
