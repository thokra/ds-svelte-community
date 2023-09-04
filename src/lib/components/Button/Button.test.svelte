<script lang="ts">
	import Button from "./Button.svelte";
	import type { Props } from "./type";

	type $$Props = Props;
</script>

<Button {...$$props}>Click me!</Button>
