<script>
	import { GuidePanel } from "$lib/components/GuidePanel";
	import { Sun as Moon, Sun } from "$lib/icons";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import source from "./examples/GuidePanel.svelte?raw";
</script>

<Meta
	title="components/GuidePanel"
	component={GuidePanel}
	argTypes={{
		poster: {
			description: "Poster positions guide-illustration above content.",
		},
	}}
/>

<Template let:args>
	<GuidePanel {...args}>
		Sit sint eu dolore reprehenderit exercitation labore aute anim sit adipisicing proident. Tempor
		ipsum ea cupidatat qui esse do veniam cupidatat. Excepteur irure reprehenderit esse tempor nisi
		duis qui ea enim id.
	</GuidePanel>
</Template>

<Story name="Default" {source} />

<Story name="Poster" args={{ poster: true }} />

<Story name="Custom illustration">
	<div class="colgap">
		<GuidePanel>
			<svelte:fragment slot="illustration"><Sun /></svelte:fragment>
			Sit sint eu dolore reprehenderit exercitation labore aute anim sit adipisicing proident. Tempor
			ipsum ea cupidatat qui esse do veniam cupidatat. Excepteur irure reprehenderit esse tempor nisi
			duis qui ea enim id.
		</GuidePanel>

		<GuidePanel poster>
			<svelte:fragment slot="illustration"><Moon /></svelte:fragment>
			Sit sint eu dolore reprehenderit exercitation labore aute anim sit adipisicing proident. Tempor
			ipsum ea cupidatat qui esse do veniam cupidatat. Excepteur irure reprehenderit esse tempor nisi
			duis qui ea enim id.
		</GuidePanel>
	</div>
</Story>

<style>
	.colgap {
		flex-direction: column;
		display: flex;
		gap: 4rem;
	}
</style>
