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
	import type { ComponentType, Snippet } from "svelte";
	import { getDocContext } from "./context.svelte";

	const defaultOptions = {
		center: true,
		package: "@nais/ds-svelte-community",
		extraComponents: [],
	};

	const ctx = getDocContext();

	let {
		component,
		componentOptions,
		children,
		preview,
		...restProps
	}: {
		[key: string]: unknown;
		component: ComponentType;
		componentOptions?: ComponentOptions;
		children?: Snippet;
		preview?: { width?: string };
	} = $props();

	const options = { ...defaultOptions, ...componentOptions };

	let code = $derived.by(() => {
		let props = Object.entries(restProps)
			.map(([key, value]) => {
				if (typeof value === "function") {
					return;
				}

				if (typeof value === "string") {
					return `${key}="${value}"`;
				} else {
					return `${key}={${JSON.stringify(value)}}`;
				}
			})
			.join("\n\t");

		console.log(options);

		let ret = `<script lang="ts">
	import { ${[ctx.name, ...options.extraComponents].sort().join(", ")} } from "${options.package}";
<ENDOFSCRIPTTAG>

<${ctx.name}${props.length > 0 ? " " + props : ""}`
			// The svelte compiler doesn't like the closing script tag, so we replace it with a placeholder
			.replace("ENDOFSCRIPTTAG", "/script");

		if (options.body) {
			ret += `>
	${options.body}
</${ctx.name}>`;
		} else if (children) {
			ret += `>
</${ctx.name}>`;
		} else {
			ret += ` />`;
		}

		return ret;
	});
</script>

{#snippet defaultBody()}
	{#if options.body}
		{options.body}
	{:else if children}
		{@render children()}
	{/if}
{/snippet}

<div class="preview" class:center={options.center}>
	<div class="preview-wrapper" style="width: {preview?.width}">
		<svelte:component this={component} children={defaultBody} {...restProps} />
	</div>
</div>

<div class="code-preview">
	<div class="copy-code">
		<CopyButton size="small" copyText={code} text="Copy code" activeText="Code copied" />
	</div>
	<HighlightSvelte {code} />
</div>

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
