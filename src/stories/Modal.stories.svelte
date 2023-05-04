<script>
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";

	import Button from "$lib/components/Button.svelte";
	import Modal from "$lib/components/Modal/Modal.svelte";
	import BodyLong from "$lib/components/typography/BodyLong.svelte";
	import Heading from "$lib/components/typography/Heading.svelte";

	let open = false;
	let inner = false;
</script>

<Meta title="ds-svelte/Modal" component={Modal} />

<Template let:args>
	<Button on:click={() => (open = true)}>Open modal</Button>
	<Modal bind:open>
		<Heading spacing level="1" size="large" id="modal-heading">Laborum proident id ullamco</Heading>
		<Heading spacing level="2" size="medium">
			Excepteur labore nostrud incididunt exercitation.
		</Heading>
		<BodyLong spacing>
			Culpa aliquip ut cupidatat laborum minim quis ex in aliqua. Qui incididunt dolor do ad ut.
			Incididunt eiusmod nostrud deserunt duis laborum. Proident aute culpa qui nostrud velit
			adipisicing minim. Consequat aliqua aute dolor do sit Lorem nisi mollit velit. Aliqua
			exercitation non minim minim pariatur sunt laborum ipsum. Exercitation nostrud est laborum
			magna non non aliqua qui esse.
		</BodyLong>
	</Modal>
</Template>

<Story name="Default" />

<Story name="Nested">
	<Button on:click={() => (open = true)}>Open nested modal</Button>
	<Modal bind:open>
		<Heading spacing level="1" size="large" id="modal-heading">Using nested modals</Heading>
		<Button on:click={() => (inner = true)}>Open inner modal</Button>
		<BodyLong spacing>
			<br /><br />
			Inner modal is open {inner}
		</BodyLong>

		<Modal bind:open={inner}>
			<Heading spacing level="2" size="medium">Inner modal opened</Heading>
		</Modal>
	</Modal>
</Story>
