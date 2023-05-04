<script>
	import { GuidePanel } from "$lib/components/GuidePanel";
	import { Sun, Sun as Moon } from "$lib/icons";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	let child1 = false;
	let child2 = false;
</script>

<Meta title="ds-svelte/GuidePanel" component={GuidePanel} />

<Template let:args>
	<GuidePanel {...args}>
		Sit sint eu dolore reprehenderit exercitation labore aute anim sit adipisicing proident. Tempor
		ipsum ea cupidatat qui esse do veniam cupidatat. Excepteur irure reprehenderit esse tempor nisi
		duis qui ea enim id.
	</GuidePanel>
</Template>

<Story name="Default" />

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
