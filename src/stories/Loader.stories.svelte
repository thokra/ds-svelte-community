<script>
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Loader from "$lib/components/Loader.svelte";
</script>

<Meta title="ds-svelte/Loader" component={Loader} />

<Template let:args>
	<Loader {...args} />
</Template>

<Story name="Default" />

<Story name="Small" args={{ size: "small" }} />

<Story name="Variant" args={{ variant: "interaction" }} />

<Story name="Transparent" args={{ transparent: true }} />
