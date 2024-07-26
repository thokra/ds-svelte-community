<script lang="ts">
	import GuidePanel from "./GuidePanel.svelte";
	import type { Props } from "./type";

	let props: Omit<Props, "children"> = $props();
</script>

<GuidePanel {...props}>Guide Panel Content</GuidePanel>
