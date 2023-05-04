<script>
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Panel from "$lib/components/Panel.svelte";
	import BodyLong from "$lib/components/typography/BodyLong.svelte";
	import Heading from "$lib/components/typography/Heading.svelte";
</script>

<Meta title="ds-svelte/Panel" component={Panel} />

<Template let:args>
	<Panel {...args}>
		<Heading spacing={true} level="2" size="large">Apply for financial social assistance</Heading>
		<BodyLong>
			You can apply for whatever you need financial support for. There is only one application form,
			and you describe yourself what you want to apply for. The NAV office will make a concrete and
			individual assessment of your application. If you have sent an application and want to send
			documentation, you can do this during your applications.
		</BodyLong>
	</Panel>
</Template>

<Story name="Default" />
<Story name="Border" args={{ border: true }} />
