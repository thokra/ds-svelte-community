<script lang="ts">
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Button from "$lib/components/Button.svelte";
	import Popover from "$lib/components/Popover.svelte";

	let open = false;
	let button: HTMLButtonElement;
</script>

<Meta title="ds-svelte/Popover" component={Popover} />

<Template let:args>
	<Button bind:el={button} on:click={() => (open = true)}>Åpne popover</Button>
	<Popover {open} on:close={() => (open = false)} anchorEl={button} {...args}>Innhold her!</Popover>
</Template>

<Story name="Default" />
