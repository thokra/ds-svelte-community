<script lang="ts">
	import { BodyLong, Button, Heading, Modal } from "$lib";

	let open = false;
</script>

<Button on:click={() => (open = true)}>Open modal</Button>
<Modal bind:open>
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
		exercitation non minim minim pariatur sunt laborum ipsum. Exercitation nostrud est laborum magna
		non non aliqua qui esse.
	</BodyLong>
</Modal>
