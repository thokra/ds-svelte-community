<script lang="ts">
	import { createEventDispatcher } from "svelte";
	/**
	 * Select some type
	 */
	export let kind: "button" | "submit" | "reset" = "button";
	/**
	 * Color
	 */
	export let color: string;

	const dispatcher = createEventDispatcher<{
		click: MouseEvent;
	}>();
</script>

<button
	type={kind}
	on:click={(e) => {
		dispatcher("click", e);
	}}
	style="color: {color}"
>
	<!-- Slot comment -->
	<slot />

	<!-- named slot comment -->
	<slot name="named" {color}>Default</slot>
</button>
