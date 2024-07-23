<script lang="ts">
	import Button from "./Button.svelte";
	import type { Props } from "./type";

	let { ...restProps }: Props = $props();
</script>

<Button {...restProps}>Click me!</Button>
