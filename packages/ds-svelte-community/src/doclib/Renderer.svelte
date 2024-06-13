<script lang="ts" context="module">
	import "svelte-highlight/styles/github-dark.css";
	export type ComponentOptions = {
		center?: boolean;
		package?: string;
		body?: string;
		extraComponents?: string[];
	};
</script>

<script lang="ts">
	import { CopyButton } from "$lib";
	import Highlight from "./Highlight.svelte";
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

	let showCode = $state(false);

	const options = { ...defaultOptions, ...componentOptions };

	const code = $derived.by(() => {
		if (!source) return "";
		return source.replace(/(\s*\{docProps\}\s*)/g, (p1) => {
			if (Object.keys(values).length === 0) {
				return p1.indexOf("\n") >= 0 ? "\n" : "";
			}

			return (
				"\n" +
				Object.keys(values)
					.sort()
					.map((key) => {
						const value = values[key];
						if (typeof value === "string") {
							if (value.indexOf(`"`) === 0) {
								return `	${key}=${value}`;
							}
							if (value === "true") {
								return `	${key}`;
							}
							return `	${key}={${value}}`;
						}

						return `	${key}={${JSON.stringify(value)}}`;
					})
					.join("\n")
			);
		});
	});

	const fromText = (t: string): unknown => {
		if (t === "undefined" || t === undefined) {
			return undefined;
		} else if (t === "null" || t === null) {
			return null;
		}

		return JSON.parse(t);
	};

	const dejsonify = (obj: Record<string, unknown>) => {
		const ret: Record<string, unknown> = {};
		Object.entries(obj).forEach(([key, value]) => {
			if (typeof value === "string") {
				try {
					ret[key] = fromText(value);
				} catch {
					ret[key] = value;
				}
			} else {
				ret[key] = value;
			}
		});
		return ret;
	};
</script>

<div class="preview" class:center={options.center}>
	<div class="preview-wrapper" style="width: {preview?.width}" class:show-code={code && showCode}>
		{@render children({ docProps: dejsonify(values) })}
		<!-- <svelte:component this={component} children={defaultBody} {...restProps} /> -->
	</div>
	{#if code}
		<button class="toggleCode" onclick={() => (showCode = !showCode)}>
			{showCode ? "Hide" : "Show"} code
		</button>
	{/if}
</div>

{#if code && showCode}
	<div class="code-preview">
		<div class="copy-code">
			<CopyButton size="small" copyText={code} text="Copy code" activeText="Code copied" />
		</div>
		<Highlight {code} />
	</div>
{/if}

<style>
	.preview {
		background-color: var(--a-surface-default);
		border: 1px solid var(--a-border-default);
		border-radius: var(--a-border-radius-medium);
		min-height: 250px;
		position: relative;
	}

	.preview-wrapper {
		margin: 1rem;

		&.show-code {
			border-bottom-left-radius: 0;
		}
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

		:global(pre) {
			margin-top: 0;
		}
	}

	.toggleCode {
		position: absolute;
		bottom: -1px;
		right: -1px;
		font-size: var(--a-font-size-small);
		border: 1px solid var(--a-border-default);
		border-radius: 0;
		border-top-left-radius: var(--a-border-radius-medium);
		padding: 0.2rem 0.5rem;
		cursor: pointer;

		&:hover {
			background-color: var(--a-surface-alt-1-subtle);
		}
	}
</style>
