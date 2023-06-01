<script lang="ts" context="module">
	import { getContext } from "svelte";
	import type { AccordionContext, Props } from "./type";

	const contextKey = Symbol("AccordionContext");

	export function GetAccordionContext(): Readable<AccordionContext> | undefined {
		return getContext<Readable<AccordionContext>>(contextKey);
	}
</script>

<script lang="ts">
	import { setContext } from "svelte";
	import { writable, type Readable } from "svelte/store";
	import { classes, omit } from "../helpers";

	export let variant: Props["variant"] = "default";
	export let headingSize: Props["headingSize"] = "small";
	export let size: Props["size"] = "medium";

	type $$Props = Props;

	const ctx: AccordionContext = {
		variant,
		headingSize,
		size,
	};
	const ctxStore = writable<AccordionContext>(ctx);
	setContext<Readable<AccordionContext>>(contextKey, ctxStore);

	$: {
		ctx.headingSize = headingSize;
		ctx.size = size;
		ctx.variant = variant;

		ctxStore.set(ctx);
	}
</script>

<div
	{...omit($$restProps, "class")}
	class={classes($$restProps, "navds-accordion", `navds-accordion--${size}`)}
>
	<!-- List of AccordionItem -->
	<slot />
</div>
