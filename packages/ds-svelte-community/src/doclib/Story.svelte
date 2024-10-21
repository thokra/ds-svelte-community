<script lang="ts" module>
	import type { Snippet } from "svelte";

	export type StorySnippet = Snippet<[{ docProps: { [key: string]: unknown } }]>;
</script>

<script lang="ts">
	let {
		name = "Default",
		source,
		locked = false,
		children,
	}: {
		name?: string;
		source?: string;
		locked?: boolean;
		children: StorySnippet;
	} = $props();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const used = (..._: unknown[]) => {};
	used(name, source, locked, children);
</script>
