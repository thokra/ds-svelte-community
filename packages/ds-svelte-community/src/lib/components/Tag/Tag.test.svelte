<script lang="ts">
	import Tag from "./Tag.svelte";
	import type { Props } from "./type";

	let props: Omit<Props, "children"> = $props();
</script>

<Tag {...props}>Tag content</Tag>
