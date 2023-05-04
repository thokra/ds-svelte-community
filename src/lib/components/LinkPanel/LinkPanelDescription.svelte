<script lang="ts">
	import type { HTMLAttributes, SvelteHTMLElements } from "svelte/elements";
	import { classes, omit } from "../helpers";
	import BodyLong from "../typography/BodyLong.svelte";

	interface $$Props extends HTMLAttributes<HTMLElement> {}
</script>

<BodyLong
	as="div"
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-link-panel__description")}
>
	<slot />
</BodyLong>
