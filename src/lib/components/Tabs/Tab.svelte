<script lang="ts">
	import { onMount } from "svelte";
	import { Focus, classes, focusable, omit } from "../helpers";
	import BodyShort from "../typography/BodyShort.svelte";
	import { ases, getTabsContext, type TabProps } from "./type";

	type $$Props = TabProps;

	export let value: string;
	export let as: (typeof ases)[number] = "button";

	const ctx = getTabsContext();
	const currentValue = ctx.value;
	const activeTab = ctx.activeTab;
	let self: HTMLElement;

	onMount(() => {
		ctx.register(self, value);
	});

	const handleKeydown = (e: KeyboardEvent) => {
		let base = 0;
		if (ctx.loop) {
			base |= Focus.Wrap;
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault();
			focusable(ctx.tabs, base | Focus.Previous);
		} else if (e.key === "ArrowRight") {
			e.preventDefault();
			focusable(ctx.tabs, base | Focus.Next);
		} else if (e.key === "Home") {
			// PageUp not defined by
			e.preventDefault();
			focusable(ctx.tabs, base | Focus.First);
		} else if (e.key === "End") {
			e.preventDefault();
			focusable(ctx.tabs, base | Focus.Last);
		}
	};

	const handleFocus = () => {
		ctx.focusOn(self);
		if (as != "a" && ctx.selectionFollowsFocus) {
			ctx.activate(value);
		}
	};

	const handleBlur = () => {
		ctx.blur(self);
	};
</script>

<svelte:element
	this={as}
	bind:this={self}
	{...omit($$restProps, "class", "type", "role", "aria-selected", "tabindex")}
	class={classes(
		$$restProps,
		"navds-tabs__tab",
		`navds-tabs__tab--${ctx.size}`,
		`navds-tabs__tab-icon--${ctx.iconPosition}`,
	)}
	class:navds-tabs__tab--icon-only={$$slots.icon && !$$slots.default}
	class:unstyled={as === "a"}
	type="button"
	role="tab"
	aria-controls={ctx.idFor("panel", value)}
	id={ctx.idFor("tab", value)}
	aria-selected={$currentValue == value}
	tabindex={$activeTab == self ? 0 : -1}
	on:click={() => as != "a" && ctx.activate(value)}
	on:keydown={handleKeydown}
	on:focus={handleFocus}
	on:blur={handleBlur}
>
	<BodyShort as="span" class="navds-tabs__tab-inner" size={ctx.size}>
		<slot name="icon" />
		<slot />
	</BodyShort>
</svelte:element>
