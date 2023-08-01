<script lang="ts">
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Popover from "$lib/components/Popover.svelte";

	let open = false;
	let button: HTMLButtonElement;
</script>

<Meta title="components/Popover" component={Popover} />

<Template let:args>
	<button on:click={() => (open = true)}>Åpne popover</button>
	<Popover {open} on:close={() => (open = false)} anchorEl={button} {...args}>Innhold her!</Popover>
</Template>

<Story name="Default" />
