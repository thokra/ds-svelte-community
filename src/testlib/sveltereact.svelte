<script lang="ts">
	import React from "react";
	import ReactDOM from "react-dom";
	import { onMount } from "svelte";

	const e = React.createElement;
	let container: HTMLElement;

	/**
	 * Svelte compiles on the server/statically, React renders on the client.
	 * Therefore, React stuff need to happen within Svelte (window/dom) zones.
	 */
	onMount(() => {
		console.log("On mount");
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { el, children, class: _, ...props } = $$props;
		try {
			ReactDOM.render(e(el, props, children), container);
		} catch (err) {
			console.warn(`react-adapter failed to mount.`, { err });
		}

		return () => {
			console.log("On destroy");
			try {
				container && ReactDOM.unmountComponentAtNode(container);
			} catch (err) {
				console.warn(`react-adapter failed to unmount.`, { err });
			}
		};
	});
</script>

{#if $$slots.default}
	<div bind:this={container} class={$$props.class}><slot /></div>
{:else}
	<div bind:this={container} class={$$props.class} />
{/if}
