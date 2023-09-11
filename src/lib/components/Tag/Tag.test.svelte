<script lang="ts">
	import Tag from "./Tag.svelte";
	import type { Props } from "./type";

	type $$Props = Props;
</script>

<Tag {...$$props}>Tag content</Tag>
