<script lang="ts">
	import type { Snippet } from "svelte";
	import { ActionMenuRadioGroupContext, setRadioGroupContext } from "./context.svelte";

	interface Props {
		label: string;
		value: unknown;
		children: Snippet;
	}

	let { label, value, children }: Props = $props();

	const ctx = new ActionMenuRadioGroupContext();
	ctx.currentValue = value;
	setRadioGroupContext(ctx);
</script>

<div role="group">
	<div class="navds-action-menu__label">{label}</div>

	{@render children()}
</div>
