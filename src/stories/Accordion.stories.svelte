<script lang="ts">
	import { Accordion, AccordionItem } from "$lib";
	import { headingSizes, sizes, variants } from "$lib/components/Accordion/type";
	// eslint-disable-next-line
	// @ts-ignore
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import source from "./examples/Accordion.svelte?raw";
</script>

<Meta
	title="components/Accordion"
	component={Accordion}
	argTypes={{
		variant: {
			control: "select",
			options: variants,

			description: "The variant of the accordion.",
			table: {
				type: { summary: variants.join(" | ") },
			},
		},
		size: {
			control: "select",
			options: sizes,

			description: "The size of the accordion.",
			table: {
				type: { summary: sizes.join(" | ") },
			},
		},
		headingSize: {
			control: "select",
			options: headingSizes,

			description: "The size of the accordion heading.",
			table: {
				type: { summary: headingSizes.join(" | ") },
			},
		},
	}}
/>

<Template let:args>
	<Accordion {...args}>
		<AccordionItem heading="Accordion header text">
			Magna aliquip aliquip fugiat nostrud nostrud velit pariatur veniam officia laboris voluptate
			officia pariatur. <a href="#Lorem">Lorem est</a> ex anim velit occaecat nisi qui nostrud sit consectetur
			consectetur officia nostrud ullamco. Est ex duis proident nostrud elit qui laborum anim minim eu
			eiusmod. Veniam in nostrud sunt tempor velit incididunt sint ex dolor qui velit id eu. Deserunt
			magna sunt velit in. Est exercitation id cillum qui do. Minim adipisicing nostrud commodo proident
			occaecat aliquip nulla anim proident reprehenderit. Magna ipsum officia veniam cupidatat duis veniam
			dolore reprehenderit mollit velit. Ut consequat commodo minim occaecat id pariatur. Nisi enim tempor
			laborum commodo. Tempor sit quis nostrud eu cupidatat sunt commodo reprehenderit irure deserunt
			eiusmod ipsum. Exercitation quis commodo cillum eiusmod eiusmod. Do laborum qui proident commodo
			adipisicing eiusmod id.
		</AccordionItem>

		<AccordionItem open={true} heading="Default open">
			Exercitation quis commodo cillum eiusmod eiusmod. Do laborum qui proident commodo adipisicing
			eiusmod id.
		</AccordionItem>

		<AccordionItem heading="Accordion header text">
			Magna aliquip aliquip fugiat nostrud nostrud velit pariatur veniam officia laboris voluptate
			officia pariatur. <a href="#Lorem">Lorem est</a> ex anim velit occaecat nisi qui nostrud sit consectetur
			consectetur officia nostrud ullamco. Est ex duis proident nostrud elit qui laborum anim minim eu
			eiusmod. Veniam in nostrud sunt tempor velit incididunt sint ex dolor qui velit id eu. Deserunt
			magna sunt velit in. Est exercitation id cillum qui do. Minim adipisicing nostrud commodo proident
			occaecat aliquip nulla anim proident reprehenderit. Magna ipsum officia veniam cupidatat duis veniam
			dolore reprehenderit mollit velit. Ut consequat commodo minim occaecat id pariatur. Nisi enim tempor
			laborum commodo. Tempor sit quis nostrud eu cupidatat sunt commodo reprehenderit irure deserunt
			eiusmod ipsum. Exercitation quis commodo cillum eiusmod eiusmod. Do laborum qui proident commodo
			adipisicing eiusmod id.
		</AccordionItem>
	</Accordion>
</Template>

<Story name="Default" {source} />
