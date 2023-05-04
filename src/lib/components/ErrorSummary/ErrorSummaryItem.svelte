<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements";

	export let href: string;

	interface $$Props extends HTMLAnchorAttributes {
		href: string;
	}
</script>

<li>
	<a {...$$restProps} class="navds-error-summary__list-item" {href}>
		<slot />
	</a>
</li>
