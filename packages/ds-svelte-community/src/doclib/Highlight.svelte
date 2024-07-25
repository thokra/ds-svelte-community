<script lang="ts">
	import { getSingletonHighlighter, type BundledLanguage, type BundledTheme } from "shiki";

	let {
		code,
		lang = "svelte",
		theme = "dark-plus",
	}: { code: string; lang?: BundledLanguage; theme?: BundledTheme } = $props();

	// TODO: We can probably make this global
	const highlighter = getSingletonHighlighter({
		themes: [theme],
		langs: [lang],
	});
</script>

<div>
	{#await highlighter}
		<p>Loading...</p>
	{:then loader}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html loader.codeToHtml(code, { lang: lang, theme: theme })}
	{/await}
</div>
