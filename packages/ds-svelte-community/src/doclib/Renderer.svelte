<script lang="ts" context="module">
	import { HighlightSvelte } from "svelte-highlight";
	import "svelte-highlight/styles/a11y-dark.css";
</script>

<script lang="ts">
	import { CopyButton } from "$lib";
	import type { ComponentType } from "svelte";
	import { getDocContext } from "./context.svelte";

	type componentOptions = {
		center?: boolean;
		package?: string;
		body?: string;
	};

	const defaultOptions: componentOptions = {
		center: true,
		package: "@nais/ds-svelte-community",
	};

	const ctx = getDocContext();

	let {
		component,
		componentOptions,
		...restProps
	}: { [key: string]: unknown; component: ComponentType; componentOptions?: componentOptions } =
		$props();

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
	import { ${ctx.name} } from "${options.package}";
<ENDOFSCRIPTTAG>

<${ctx.name}${props.length > 0 ? " " + props : ""}`
			// The svelte compiler doesn't like the closing script tag, so we replace it with a placeholder
			.replace("ENDOFSCRIPTTAG", "/script");

		if (options.body) {
			ret += `>
	${options.body}
</${ctx.name}>`;
		} else {
			ret += ` />`;
		}

		return ret;
	});
</script>

{#snippet defaultBody()}
	{options.body}
{/snippet}

<div class="preview" class:center={options.center}>
	<svelte:component this={component} children={defaultBody} {...restProps} />
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
