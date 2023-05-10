<script lang="ts" context="module">
	import { getContext } from "svelte";

	export type AccordionContext = {
		variant: "default" | "neutral";
		headingSize: "large" | "medium" | "small" | "xsmall";
		size: "large" | "medium" | "small";
	};

	const contextKey = Symbol("AccordionContext");

	export function GetAccordionContext(): Readable<AccordionContext> | undefined {
		return getContext<Readable<AccordionContext>>(contextKey);
	}
</script>

<script lang="ts">
	import { classes, omit } from "../helpers";
	import { setContext } from "svelte";
	import { writable, type Readable } from "svelte/store";

	export let variant: AccordionContext["variant"] = "default";
	export let headingSize: AccordionContext["headingSize"] = "small";
	export let size: AccordionContext["size"] = "medium";

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
	<slot />
</div>
