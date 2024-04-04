<script lang="ts">
	import { createEventDispatcher } from "svelte";

	type ButtonProps = {
		/**
		 * Select some type
		 */
		kind?: "button" | "submit" | "reset";
		color: string;
	};

	/**
	 * Select some type
	 */
	export let kind: ButtonProps["kind"] = "button";
	export let color: ButtonProps["color"];

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
