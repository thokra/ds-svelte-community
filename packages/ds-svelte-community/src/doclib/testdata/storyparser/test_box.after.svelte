<script lang="ts">
	import doc from "$lib/components/Checkbox/Checkbox.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import { Checkbox } from "$lib";

	let selected = $state(false);
</script>

{#snippet docSnippet0({ docProps }: { docProps: { [key: string]: unknown } })}
	<Checkbox bind:checked={selected} {...docProps}>Checkbox text</Checkbox>
	<p>Checkbox is {selected}</p>
{/snippet}
<Doc
	stories={[
		{
			name: "Default",
			source:
				"PHNjcmlwdCBsYW5nPSJ0cyI+CglpbXBvcnQgeyBDaGVja2JveCB9IGZyb20gIkBvdGhlckxpYiI7CgoJbGV0IHNlbGVjdGVkID0gJHN0YXRlKGZhbHNlKTsKPC9zY3JpcHQ+Cgo8Q2hlY2tib3ggYmluZDpjaGVja2VkPXtzZWxlY3RlZH0ge2RvY1Byb3BzfT5DaGVja2JveCB0ZXh0PC9DaGVja2JveD4KPHA+Q2hlY2tib3ggaXMge3NlbGVjdGVkfTwvcD4K",
			snippet: docSnippet0,
			locked: false,
			props: [],
			lockedProps: ["checked"],
		},
	]}
	{doc}
></Doc>
