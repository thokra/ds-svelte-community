<script>
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Button from "$lib/components/Button/Button.svelte";
	import Modal from "$lib/components/Modal/Modal.svelte";
	import BodyLong from "$lib/components/typography/BodyLong.svelte";
	import Heading from "$lib/components/typography/Heading.svelte";
	import source from "./examples/Modal.svelte?raw";

	let open = false;
	let inner = false;
</script>

<Meta
	title="components/Modal"
	component={Modal}
	argTypes={{
		open: {
			control: "boolean",
			table: {
				type: {
					summary: "boolean",
				},
			},
			description: `
Set open to \`true\` to open the dialog. Set to \`false\` to close it.

Recommended to use with \`bind:open\`.`,
		},
		closeButton: {
			description: "Removes close-button(X) when false.",
		},
		isModal: {
			description: "Set to `true` to make the dialog modal.",
		},
	}}
/>

<Template let:args>
	<Button on:click={() => (open = true)}>Open modal</Button>
	<Modal bind:open {...args}>
		<Heading spacing={true} level="1" size="large" id="modal-heading"
			>Laborum proident id ullamco</Heading
		>
		<Heading spacing={true} level="2" size="medium">
			Excepteur labore nostrud incididunt exercitation.
		</Heading>
		<BodyLong spacing={true}>
			Culpa aliquip ut cupidatat laborum minim quis ex in aliqua. Qui incididunt dolor do ad ut.
			Incididunt eiusmod nostrud deserunt duis laborum. Proident aute culpa qui nostrud velit
			adipisicing minim. Consequat aliqua aute dolor do sit Lorem nisi mollit velit. Aliqua
			exercitation non minim minim pariatur sunt laborum ipsum. Exercitation nostrud est laborum
			magna non non aliqua qui esse.
		</BodyLong>
	</Modal>
</Template>

<Story name="Default" {source} />

<Story name="Nested">
	<Button on:click={() => (open = true)}>Open nested modal</Button>
	<Modal bind:open>
		<Heading spacing={true} level="1" size="large" id="modal-heading">Using nested modals</Heading>
		<Button on:click={() => (inner = true)}>Open inner modal</Button>
		<BodyLong spacing={true}>
			<br /><br />
			Inner modal is open {inner}
		</BodyLong>

		<Modal bind:open={inner}>
			<Heading spacing level="2" size="medium">Inner modal opened</Heading>
		</Modal>
	</Modal>
</Story>
