<script lang="ts">
	import React from "react";
	import ReactDOM from "react-dom";
	import { onMount } from "svelte";
	interface Props {
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let { ...props_1 }: Props = $props();

	const e = React.createElement;
	let container: HTMLElement = $state();

	/**
	 * Svelte compiles on the server/statically, React renders on the client.
	 * Therefore, React stuff need to happen within Svelte (window/dom) zones.
	 */
	onMount(() => {
		console.log("On mount");
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { el, children, class: _, ...props } = props_1;
		try {
			ReactDOM.render(e(el, props, children), container);
		} catch (err) {
			console.warn(`react-adapter failed to mount.`, { err });
		}

		return () => {
			console.log("On destroy");
			try {
				if (container) {
					ReactDOM.unmountComponentAtNode(container);
				}
			} catch (err) {
				console.warn(`react-adapter failed to unmount.`, { err });
			}
		};
	});
</script>

{#if props_1.children}
	<div bind:this={container} class={props_1.class}>{@render props_1.children?.()}</div>
{:else}
	<div bind:this={container} class={props_1.class}></div>
{/if}
