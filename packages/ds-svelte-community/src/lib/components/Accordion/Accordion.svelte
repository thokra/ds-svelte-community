<!--
	@component
	Accordion is related sections with interactive headers that allow users to open or close the view of
	the content below.

	Read more about this component in the [Aksel documentation](https://aksel.nav.no/komponenter/core/accordion).
 -->

<script lang="ts" context="module">
	import { getContext } from "svelte";
	import type { AccordionContext, Props } from "./type";

	const contextKey = Symbol("AccordionContext");

	export function GetAccordionContext(): AccordionContext | undefined {
		return getContext<AccordionContext>(contextKey);
	}
</script>

<script lang="ts">
	import { setContext } from "svelte";
	import { classes, omit } from "../helpers";

	let {
		variant,
		headingSize = "small",
		size = "medium",
		indent = true,
		children,
		...restProps
	}: Props = $props();

	class Context {
		variant: Props["variant"] = $derived(variant);
		headingSize: Props["headingSize"] = $derived(headingSize);
		size: Props["size"] = $derived(size);
	}

	const ctx = new Context();
	setContext<AccordionContext>(contextKey, ctx);
</script>

<div
	{...omit(restProps, "class")}
	class={classes(restProps, "navds-accordion", `navds-accordion--${size}`)}
	class:navds-accordion--indent={indent}
>
	{@render children()}
</div>
