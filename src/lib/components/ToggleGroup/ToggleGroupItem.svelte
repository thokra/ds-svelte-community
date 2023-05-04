<script lang="ts">
	import { getContext } from "svelte";
	import { classes } from "../helpers";
	import Label from "../typography/Label.svelte";
	import type { ToggleGroupContext } from "./ToggleGroup.svelte";

	export let value: string;

	const ctx = getContext<ToggleGroupContext>("toggleGroup");
	let active = ctx.value;

	$: state = $active === value ? "on" : "off";

	function handleClick() {
		if (state === "off") {
			$active = value;
		}
	}

	// This feels hacky
	function keydown(e: KeyboardEvent) {
		const btn = e.target as HTMLElement;

		if (e.key == "ArrowLeft" || e.key == "ArrowUp") {
			if (!btn?.previousElementSibling) {
				if (btn.parentElement?.lastElementChild) {
					(btn.parentElement?.lastElementChild as HTMLElement)?.focus();
				}
				return;
			}

			const pes = btn.previousElementSibling as HTMLElement;
			pes?.focus();
		}

		if (e.key == "ArrowRight" || e.key == "ArrowDown") {
			if (!btn?.nextElementSibling) {
				if (btn.parentElement?.firstElementChild) {
					(btn.parentElement?.firstElementChild as HTMLElement)?.focus();
				}
				return;
			}

			const nes = btn.nextElementSibling as HTMLElement;
			nes?.focus();
		}
	}
</script>

<button
	{...$$restProps}
	class={classes($$restProps, "navds-toggle-group__button")}
	data-state={state}
	role="radio"
	aria-checked={state === "on"}
	tabindex={state == "on" ? 0 : -1}
	on:click={handleClick}
	on:keydown={keydown}
>
	<Label as="span" class="navds-toggle-group__button-inner" size={ctx.size}>
		<slot />
	</Label>
</button>
