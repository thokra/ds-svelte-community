<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements";
	import { omit } from "../helpers";

	interface $$Props extends HTMLAnchorAttributes {
		href: string;
	}

	export let href: string;
</script>

<li>
	<a {...omit($$restProps, "class")} class={"navds-error-summary__item navds-link"} {href}>
		<slot />
	</a>
</li>
