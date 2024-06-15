<script lang="ts">
	import type { Props } from "./types";

	let { type = "button", color, onClick, children, named }: Props = $props();
</script>

<button
	{type}
	onclick={(e) => {
		if (onClick) {
			onClick(e);
		}
	}}
	style="color: {color}"
>
	{@render children()}

	{#if named}
		{@render named(color)}
	{:else}
		Default
	{/if}
</button>
