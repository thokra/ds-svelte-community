<script lang="ts">
	import Alert from "./Alert.svelte";
	import type { Props } from "./type";

	type $$Props = Props;
</script>

<Alert {...$$props}>Some alert</Alert>
