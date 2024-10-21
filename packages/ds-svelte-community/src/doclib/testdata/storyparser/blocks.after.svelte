<script lang="ts">
	import doc from "$lib/components/Button/Button.svelte?doc";

	import Doc from "$doclib/Doc.svelte";
	import { Button } from "$lib";

	let clicks = $state(0);
	let text = "hello";
</script>

{#snippet docSnippet1({ docProps }: { docProps: { [key: string]: unknown } })}
	<Button onclick={() => clicks++} variant="secondary" {...docProps}>
		Clicked {clicks} times
	</Button>
	{#if clicks > 5}
		<p>Clicks are over 5</p>
	{/if}
{/snippet}
{#snippet docSnippet0({ docProps }: { docProps: { [key: string]: unknown } })}
	<Button loading variant="secondary" {...docProps}>{text}</Button>
{/snippet}
<Doc
	stories={[
		{
			name: "Default",
			source:
				"PHNjcmlwdCBsYW5nPSJ0cyI+CglpbXBvcnQgeyBCdXR0b24gfSBmcm9tICJAb3RoZXJMaWIiOwoKCWxldCB0ZXh0ID0gImhlbGxvIjsKPC9zY3JpcHQ+Cgo8QnV0dG9uIHtkb2NQcm9wc30+e3RleHR9PC9CdXR0b24+Cg==",
			snippet: docSnippet0,
			locked: false,
			props: [
				{ key: "loading", value: "true" },
				{ key: "variant", value: '"secondary"' },
			],
			lockedProps: [],
		},
		{
			name: "Click event",
			source:
				"PHNjcmlwdCBsYW5nPSJ0cyI+CglpbXBvcnQgeyBCdXR0b24gfSBmcm9tICJAb3RoZXJMaWIiOwoKCWxldCBjbGlja3MgPSAkc3RhdGUoMCk7Cjwvc2NyaXB0PgoKPEJ1dHRvbiBvbmNsaWNrPXsoKSA9PiBjbGlja3MrK30ge2RvY1Byb3BzfT4KCUNsaWNrZWQge2NsaWNrc30gdGltZXMKPC9CdXR0b24+CnsjaWYgY2xpY2tzID4gNX0KCTxwPkNsaWNrcyBhcmUgb3ZlciA1PC9wPgp7L2lmfQo=",
			snippet: docSnippet1,
			locked: false,
			props: [{ key: "variant", value: '"secondary"' }],
			lockedProps: ["onclick"],
		},
	]}
	{doc}
></Doc>
