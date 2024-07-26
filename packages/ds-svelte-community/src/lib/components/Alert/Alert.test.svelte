<script lang="ts">
	import Alert from "./Alert.svelte";
	import type { Props } from "./type";

	let props: Omit<Props, "children"> = $props();
</script>

<Alert {...props}>Some alert</Alert>
