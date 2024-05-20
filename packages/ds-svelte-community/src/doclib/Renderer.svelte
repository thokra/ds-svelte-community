<script lang="ts" context="module">
	import { HighlightSvelte } from "svelte-highlight";
	import "svelte-highlight/styles/a11y-dark.css";
	export type ComponentOptions = {
		center?: boolean;
		package?: string;
		body?: string;
		extraComponents?: string[];
	};
</script>

<script lang="ts">
	import { CopyButton } from "$lib";
	import type { StorySnippet } from "./Story.svelte";

	const defaultOptions = {
		center: true,
		package: "@nais/ds-svelte-community",
		extraComponents: [],
	};

	let {
		componentOptions,
		children,
		preview,
		source,
		values,
	}: {
		values: { [key: string]: unknown };
		componentOptions?: ComponentOptions;
		children: StorySnippet;
		source?: string;
		preview?: { width?: string };
	} = $props();

	const options = { ...defaultOptions, ...componentOptions };

	const code = $derived.by(() => {
		if (!source) return "";
		return source.replace(" {...docProps}", "");
	});
</script>

<div class="preview" class:center={options.center}>
	<div class="preview-wrapper" style="width: {preview?.width}">
		{@render children({ docProps: values })}
		<!-- <svelte:component this={component} children={defaultBody} {...restProps} /> -->
		<pre>{JSON.stringify(values, null, "  ")}</pre>
	</div>
</div>

{#if code}
	<div class="code-preview">
		<div class="copy-code">
			<CopyButton size="small" copyText={code} text="Copy code" activeText="Code copied" />
		</div>
		<HighlightSvelte {code} />
	</div>
{/if}

<style>
	.preview {
		background-color: var(--a-surface-default);
		border: 1px solid var(--a-border-default);
		border-radius: var(--a-border-radius-medium);
		padding: 1rem;
		min-height: 250px;
	}

	.preview.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.code-preview {
		font-size: var(--a-font-size-small);
		tab-size: 2;
		position: relative;

		.copy-code {
			--ac-copybutton-neutral-text: var(--a-text-on-inverted);
			--ac-copybutton-neutral-hover-text: var(--a-surface-alt-1-subtle);
			--ac-copybutton-neutral-active-text: var(--a-surface-alt-1-moderate);
			display: none;

			position: absolute;
			top: 0.5rem;
			right: 0.5rem;
		}

		&:hover .copy-code {
			display: block;
		}
	}
</style>
