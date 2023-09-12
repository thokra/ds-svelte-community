<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { classes, omit } from "../helpers";
	import BodyLong from "../typography/BodyLong/BodyLong.svelte";

	type $$Props = HTMLAttributes<HTMLDivElement>;
</script>

<BodyLong
	as="div"
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-link-panel__description")}
>
	<!-- Panel description -->
	<slot />
</BodyLong>
