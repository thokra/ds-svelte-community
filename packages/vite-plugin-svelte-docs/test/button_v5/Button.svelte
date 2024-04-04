<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		/**
		 * Select some type
		 */
		type?: "button" | "submit" | "reset";
		/**
		 * Color
		 */
		color: string;
		onClick?: (e: MouseEvent) => void;
		/**
		 * Default slot
		 */
		children: Snippet;
		named?: Snippet<[string]>;
	};

	let { type = "button", color, onClick, children, named }: Props = $props();
</script>

<button
	{type}
	on:click={(e) => {
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
